from django.urls import path
from . import views

app_name = 'wdc'

urlpatterns = [
    path('', views.connector, name='connector')
]