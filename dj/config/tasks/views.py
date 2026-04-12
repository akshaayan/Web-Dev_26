from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.authtoken.models import Token

from .models import Task
from .serializers import (
    RegisterSerializer,
    LoginSerializer,
    UserInfoSerializer,
    TaskSerializer,
    TaskCreateSerializer,
)
from .permissions import IsOwnerOrReadOnlyForManager


class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        token, created = Token.objects.get_or_create(user=user)

        return Response({
            "message": "User registered successfully.",
            "token": token.key,
            "user": UserInfoSerializer(user).data
        }, status=status.HTTP_201_CREATED)


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)

        return Response({
            "message": "Login successful.",
            "token": token.key,
            "user": UserInfoSerializer(user).data
        })


class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response(UserInfoSerializer(request.user).data)


class TaskListCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user

        if user.is_staff or user.is_superuser or user.groups.filter(name="Managers").exists():
            tasks = Task.objects.all().order_by("-created_at")
        else:
            tasks = Task.objects.filter(owner=user).order_by("-created_at")

        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TaskCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        task = serializer.save(owner=request.user)
        return Response(TaskSerializer(task).data, status=status.HTTP_201_CREATED)


class TaskDetailView(APIView):
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnlyForManager]

    def get_object(self, pk):
        return Task.objects.get(pk=pk)

    def get(self, request, pk):
        task = self.get_object(pk)
        self.check_object_permissions(request, task)
        return Response(TaskSerializer(task).data)

    def put(self, request, pk):
        task = self.get_object(pk)
        self.check_object_permissions(request, task)

        serializer = TaskCreateSerializer(task, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(TaskSerializer(task).data)

    def delete(self, request, pk):
        task = self.get_object(pk)
        self.check_object_permissions(request, task)
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class AdminTaskListView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        tasks = Task.objects.all().order_by("-created_at")
        return Response(TaskSerializer(tasks, many=True).data)
