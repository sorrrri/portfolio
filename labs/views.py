from django.shortcuts import render
from django.views.generic.list import ListView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic.detail import DetailView
from django.urls import reverse_lazy

from .models import Labs

class LabsListView(ListView):
    model = Labs

class LabsCreateView(CreateView):
    model = Labs
    fields = ['site_name', 'url']
    success_url = reverse_lazy('list')
    template_name_suffix = '_create'

class LabsDetailView(DetailView):
    model = Labs

class LabsUpdateView(UpdateView):
    model = Labs
    fields = ['site_name', 'url']
    template_name_suffix = '_update'

class LabsDeleteView(DeleteView):
    model = Labs
    success_url = reverse_lazy('list')