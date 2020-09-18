from django.urls import path
from .views import *


urlpatterns = [
    path('', NewsListMain.as_view(), name='main'),
    path('news_list/', NewsList.as_view(), name='news_list'),
    # path('news_list/', news_list, name='news_list'),
    path('detail/<int:pk>', NewsDetail.as_view(), name='news_detail'),
]