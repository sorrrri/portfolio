from django.contrib import admin

from .models import Data

class DataAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'type', 'url', 'tag', 'updated']
    list_filter = ['created', 'updated', 'name']
    search_fields = ['name', 'created']
    ordering = ['-updated', '-created']

admin.site.register(Data, DataAdmin)
