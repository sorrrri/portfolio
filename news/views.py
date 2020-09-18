from django.shortcuts import render
from django.conf import settings
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView
from django.urls import reverse_lazy


# Create your views here.
from news.models import News


class NewsCreateView(LoginRequiredMixin, CreateView):
    login_url = settings.LOGIN_URL
    template_name = 'news/news_create.html'
    model = News
    fields = ['title', 'content']
    success_url = reverse_lazy('news_list')

    def form_valid(self, form):
        form.instance.author_id = self.request.user.pk
        return super().form_valid(form)


class NewsListMainView(ListView):
    template_name = 'news/main.html'
    model = News
    paginate_by = 3


class NewsListView(ListView):
    template_name = 'news/news_list.html'
    model = News
    paginate_by = 8


class NewsDetailView(DetailView):
    model = News