from django.urls import path
from .views import DataListView, DataCreateView, DataDetailView, DataUpdateView, DataDeleteView


urlpatterns = [
    path('', DataListView.as_view(), name='list'),
    path('create/', DataCreateView.as_view(), name='create'),
    path('detail/<int:pk>', DataDetailView.as_view(), name='detail'),
    path('update/<int:pk>', DataUpdateView.as_view(), name='update'),
    path('delete/<int:pk>', DataDeleteView.as_view(), name='delete'),
]
