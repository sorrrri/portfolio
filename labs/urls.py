from django.urls import path
from .views import LabsListView

urlpatterns = [
    path('', LabsListView.as_view(), name='list'),
]