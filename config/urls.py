from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from django.contrib.auth import views as auth_views
from account.forms import CustomAuthForm

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('data.urls')),
    path('account/', include('account.urls')),
    path('account/login/', auth_views.LoginView.as_view(template_name='account/login.html', authentication_form=CustomAuthForm)),
    path('account/', include('django.contrib.auth.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
