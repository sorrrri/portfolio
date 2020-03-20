from django.urls import path
from .views import LabsListView, LabsCreateView

urlpatterns = [
    path('', LabsListView.as_view(), name='list'),
    path('create/', LabsCreateView.as_view(), name='create')
]