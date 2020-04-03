from django.contrib import admin
from .models import CategoryChoice, Data



class DataAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'category', 'url', 'description', 'updated']
    list_filter = ['created', 'updated', 'name']
    search_fields = ['name', 'created']
    ordering = ['-updated', '-created']

class CategoryChoiceAdmin(admin.ModelAdmin):
    pass


admin.site.register(Data, DataAdmin)
admin.site.register(CategoryChoice, CategoryChoiceAdmin)