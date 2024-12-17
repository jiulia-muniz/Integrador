from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views

urlpatterns = [
    path('produtos', views.listar_produtos),
    path('produtos/<int:id>', views.detalhar_produto),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

from django.contrib.auth import views as auth_views

path('reset_password/', auth_views.PasswordResetView.as_view(), name="reset_password"),

path('reset_password_sent/', auth_views.PasswordResetDoneView.as_view(), name="password_reset_done"),

path('reset/<uidb64>/<token>', auth_views.PasswordResetConfirmView.as_view(), name="password_reset_confirm"),

path('reset_password_complete/', auth_views.PasswordResetCompleteView.as_view(), name="password_reset_complete"),

path('reset_password/', auth_views.PasswordResetView.as_view(template_name="usuarios/password_reset.html"), name="reset_password")