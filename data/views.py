from django.shortcuts import render
from django.views.generic.list import ListView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic.detail import DetailView

from django.urls import reverse_lazy
from .models import Data



class DataListView(ListView):
    model = Data

class DataCreateView(CreateView):
    model = Data
    fields = ['photo', 'name', 'type', 'url', 'tag']
    success_url = reverse_lazy('list')
    template_name_suffix = '_create'


class DataDetailView(DetailView):
    model = Data

class DataUpdateView(UpdateView):
    model = Data
    fields = ['photo', 'name', 'type', 'url', 'tag']
    template_name_suffix = '_update'
    success_url = reverse_lazy('list')

class DataDeleteView(DeleteView):
    model = Data
    success_url = reverse_lazy('list')