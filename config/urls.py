from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')),
    path('', include('operationalDefinition.urls')),
    path('select2/', include('django_select2.urls')),
]
