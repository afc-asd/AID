from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def connector(request):
    return render(request, "wdc/connector.html")
