from django.db import models

class Project(models.Model):
    name= models.CharField(max_length=128)
    description = models.CharField(max_length=128)
    created_at = models.DateTimeField(auto_now_add=True)
    
class Task(models.Model):
    project = models.ForeignKey(Project, related_name='tasks', on_delete=models.CASCADE)
    title = models.CharField(max_length=128)
    completed = models.BooleanField(default=False)
    due_date = models.DateTimeField(null=True, blank=True)