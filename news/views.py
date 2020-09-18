from django.shortcuts import render
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView

# Create your views here.
from news.models import News


class NewsListMain(ListView):
    model = News
    paginate_by = 2


class NewsList(ListView):
    template_name = 'news/news_list2.html'
    model = News
    paginate_by = 2


# def news_list(request):
#     news = News.objects.all()
#     return render(request, 'news/news_list2.html', {'news': news})
#     paginate_by = 2


class NewsDetail(DetailView):
    model = News
