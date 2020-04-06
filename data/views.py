from django.shortcuts import render
from django.views.generic.list import ListView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic.detail import DetailView

from django.urls import reverse_lazy
from .models import Data



class DataListView(ListView):
    model = Data
    # paginate_by = 10

    # def get_queryset(self):
    #     filter_val = self.request.GET.get('filter', 'type')
    #     order = self.request.GET.get('orderby', 'give-default-value')
    #     new_context = Data.objects.filter(
    #         state=filter_val,
    #     ).order_by(order)
    #     return new_context
    #
    # def get_context_data(self, **kwargs):
    #     context = super(DataListView, self).get_context_data(**kwargs)
    #     context['filter'] = self.request.GET.get('filter', 'type')
    #     context['orderby'] = self.request.GET.get('orderby', 'type')
    #     return context

class DataCreateView(CreateView):
    model = Data
    fields = ['photo', 'name', 'category', 'url', 'description']
    success_url = reverse_lazy('list')
    template_name_suffix = '_create'


class DataDetailView(DetailView):
    model = Data

class DataUpdateView(UpdateView):
    model = Data
    fields = ['photo', 'name', 'category', 'url', 'description']
    template_name_suffix = '_update'
    success_url = reverse_lazy('list')

class DataDeleteView(DeleteView):
    model = Data
    success_url = reverse_lazy('list')