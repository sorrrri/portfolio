from django.urls import path
from .views import OperationalDefinitionCreateView, OperationalDefinitionListView, OperationalDefinitionDetailView, \
    OperationalDefinitionUpdateView, OperationalDefinitionDeleteView

urlpatterns = [
    path('', OperationalDefinitionListView.as_view(), name='list'),
    path('create/', OperationalDefinitionCreateView.as_view(), name='create'),
    path('detail/<int:pk>', OperationalDefinitionDetailView.as_view(), name='detail'),
    path('update/<int:pk>', OperationalDefinitionUpdateView.as_view(), name='update'),
    path('delete/<int:pk>', OperationalDefinitionDeleteView.as_view(), name='delete'),
]