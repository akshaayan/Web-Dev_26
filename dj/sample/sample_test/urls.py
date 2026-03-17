from .views import StudentView  
from django.urls import path  
  
urlpattern = [  
    path('basic/', StudentView.as_view())  
]  