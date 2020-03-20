from django.urls import path
from .views import *

urlpatterns = [
    path('', LabsListView.as_view(), name='list'),
    path('create/', LabsCreateView.as_view(), name='create'),
    path('detail/<int:pk>', LabsDetailView.as_view(), name='detail'),
]