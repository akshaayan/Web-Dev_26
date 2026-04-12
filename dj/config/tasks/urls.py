from django.urls import path
from .views import (
    RegisterView,
    LoginView,
    MeView,
    TaskListCreateView,
    TaskDetailView,
    AdminTaskListView,
)

urlpatterns = [
    path("register/", RegisterView.as_view()),
    path("login/", LoginView.as_view()),
    path("me/", MeView.as_view()),
    path("tasks/", TaskListCreateView.as_view()),
    path("tasks/<int:pk>/", TaskDetailView.as_view()),
    path("admin/tasks/", AdminTaskListView.as_view()),
]