from django.urls import path

from .views import OperationalDefinitionCreateView, OperationalDefinitionListView, OperationalDefinitionDetailView, \
    OperationalDefinitionUpdateView, OperationalDefinitionDeleteView, get_select_icd_code

urlpatterns = [
    path('', OperationalDefinitionListView.as_view(), name='list'),
    path('create/', OperationalDefinitionCreateView.as_view(), name='create'),
    path('detail/<int:pk>', OperationalDefinitionDetailView.as_view(), name='detail'),
    path('update/<int:pk>', OperationalDefinitionUpdateView.as_view(), name='update'),
    path('delete/<int:pk>', OperationalDefinitionDeleteView.as_view(), name='delete'),
    path('icd_code_list/', get_select_icd_code, name='icd_code_list'),
]
