from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import Email
import json
from django.views.decorators.csrf import csrf_exempt
from django.utils import translation

# -------------------------------
# Language / Page Handling
# -------------------------------

def index_redirect(request):
    """
    Root URL view: redirect to language selection if not chosen.
    """
    if request.session.get('language'):
        translation.activate(request.session['language'])
        return redirect('index')
    else:
        return redirect('choose_language')


def choose_language(request):
    if request.method == 'POST':
        lang = request.POST.get('language')
        if lang in ['en', 'ka']:
            request.session['language'] = lang
            translation.activate(lang)
            return redirect('index')
    return render(request, 'choose_language.html')


def index(request):
    """
    Main index page. Language activated from session.
    """
    lang = request.session.get('language', 'en')
    translation.activate(lang)
    return render(request, "index.html")


def about(request):
    lang = request.session.get('language', 'en')
    translation.activate(lang)
    return render(request, "about.html")


def works(request):
    lang = request.session.get('language', 'en')
    translation.activate(lang)
    return render(request, "works.html")


def contact(request):
    lang = request.session.get('language', 'en')
    translation.activate(lang)
    return render(request, "contact.html")

@csrf_exempt
def emailapi(request):
    if request.method != "POST":
        return JsonResponse({"status": "error", "message": "Invalid request method."}, status=405)

    try:
        data = json.loads(request.body.decode("utf-8"))
        name = data.get("name", "").strip()
        email = data.get("email", "").strip()
        message = data.get("message", "").strip()

        if not name or not email or not message:
            return JsonResponse({"status": "error", "message": "All fields are required."}, status=400)

        email_entry = Email(name=name, email=email, message=message)
        email_entry.save()

        return JsonResponse({"status": "success", "message": "Message sent successfully!"})

    except Exception as e:
        return JsonResponse({"status": "error", "message": str(e)}, status=500)
