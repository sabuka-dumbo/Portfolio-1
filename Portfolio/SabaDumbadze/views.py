from django.shortcuts import render
from django.http import JsonResponse
from .models import Email
import json

# Create your views here.
def index(request):
    return render(request, "index.html")

def about(request):
    return render(request, "about.html")

def works(request):
    return render(request, "works.html")

def contact(request):
    return render(request, "contact.html")

def emailapi(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body.decode("utf-8"))

            name = data.get("name", "")
            email = data.get("email", "")
            message = data.get("message", "")

            if not name or not email or not message:
                return JsonResponse({"status": "error", "message": "All fields are required."}, status=400)

            Email.objects.create(
                name=name,
                email=email,
                message=message
            )

            return JsonResponse({"status": "success", "message": "Message sent successfully!"})
        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=500)

    return JsonResponse({"status": "error", "message": "Invalid request method."}, status=405)