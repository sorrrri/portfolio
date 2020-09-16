from django.contrib import admin

# Register your models here.
from news.models import News

class NewsAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'updated')
    list_filter = ('author',)
    search_fields = ('title', 'content')
    ordering = ['-updated']


admin.site.register(News)