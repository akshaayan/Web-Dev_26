from django.contrib import admin
from .models import Book 

# Register your models here.
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'category', 'price', 'rating', 'in_stock')
    search_fields = ('title', 'author')
    list_filter = ('category', 'in_stock')