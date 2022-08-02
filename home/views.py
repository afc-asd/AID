from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return render(request, "home/home.html")

def test(request):
    return render(request, "home/test.html")

def tab(request):
    return render(request, "home/tableau_test.html")