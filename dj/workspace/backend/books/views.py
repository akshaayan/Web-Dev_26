from django.shortcuts import render

from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.viewsets import ModelViewSet
from .models import Book

from .serializers import BookSerializer

class BookViewSet(ModelViewSet):
    queryset = Book.objects.all().order_by('-created_at')
    serializer_class = BookSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['category', 'in_stock']
    search_fields = ['title', 'author']
    ordering_fields = ['price', 'rating', 'created_at', 'title']
