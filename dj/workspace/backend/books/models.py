from django.db import models
class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=120)
    category = models.CharField(max_length=80)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    in_stock = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} — {self.author}"
