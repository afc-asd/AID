from django.shortcuts import render
from django.http import HttpResponse
from django.contrib import messages
from django.shortcuts import redirect

# Create your views here.
def home(request):
    return render(request, "home/home.html")

def home_redirect(request):
    info = 'Please log in to view the dashboard.'
    return render(request, 'home/home.html', {'info': info})

def dashboard(request):
    if request.user.is_authenticated:
        return render(request, "home/dashboard.html")
    else:
        return redirect("home:home_redirect")
