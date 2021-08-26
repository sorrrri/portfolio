from django.shortcuts import render
from django.contrib.auth.views import LoginView
from django.contrib import messages

# Create your views here.


class UserLoginView(LoginView):
    template_name = 'common/login.html'

    def form_invalid(self, form):
        messages.error(self.request, "로그인에 실패하였습니다", extra_tags="danger")
        return super().form_invalid(form)
