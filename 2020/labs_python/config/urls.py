from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('labs/', include('labs.urls')),
    path('admin/', admin.site.urls),
]
