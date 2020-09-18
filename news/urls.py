from django.urls import path
from .views import *


urlpatterns = [
    path('', NewsListMainView.as_view(), name='main'),
    path('news_list/', NewsListView.as_view(), name='news_list'),
    path('news_create/', NewsCreateView.as_view(), name='news_create'),
    path('news_detail/<int:pk>', NewsDetailView.as_view(), name='news_detail'),
]