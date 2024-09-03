# Very first steps to build django-app
1. `Create an app`
```bash
python manage.py startapp ...

# NOTE: INCLUDE this in settings.py
# RU: ДОБАВЬТЕ ЭТО В settings.py
INSTALLED_APPS = [
    ...
    'name-of-app',
    ...
]
```
2. `Update admin.py`
get the code from [Django.md](Django.md)

3. `Create urls.py`
```python
from django.urls import path
from .views import *

urlpatterns = [
    path("", function-name, name='some-name'),
]

# NOTE:  INCLUDE this in urls.py of the main project 
# RU: ДОБАВЬТЕ ЭТО В urls.py ОСНОВНОГО ПРОЕКТА

# main  urls.py
# path('name-of-app/', include('name-of-app.urls'))
```
4. `Create views.py`
```python
def view-name(request):
    context = {'key': 'value',}
    return render(request, 'name-of-html-file.html', context)
```

---
---
---
---
---

# Table of Contents
- [Table of Contents](#table-of-contents)
- [Deploying a Django project on PythonAnywhere](#deploying-a-django-project-on-pythonanywhere)
- [Configure WSGI File](#configure-wsgi-file)
- [Collect Static Files](#collect-static-files)
- [Configure Virtual Environment](#configure-virtual-environment)




# Deploying a Django project on PythonAnywhere
To host your Django project on PythonAnywhere for free, you can follow these steps:

<br>

#### 1. Create an account on PythonAnywhere: 
  - Go to [PythonAnywhere](https://www.pythonanywhere.com/) and sign up for a free account.

<br>

#### 2. Upload your code: 
  - After logging in, go to the "Files" tab and upload your project files. You can also use the Bash console to clone your project if it's hosted on a Git repository.

<br>

#### 3. Set up a virtual environment: 
  - Go to the "Consoles" tab and start a new Bash console. Then, create a new virtual environment and install your project's dependencies. You can use the Pipfile and Pipfile.lock files in your project to do this.
- To install requirements.txt file use: 
  ```bash
  # IF PIP
  pip install -r requirements.txt
  # OR
  # If PIPENV 
  # pipenv run pip freeze > requirements.txt

  mkvirtualenv --python=/usr/bin/python3.10 venv
  ```
  afterwards, enter just `venv` to activate virtual environment and install requirements.txt file:
  
  ```bash
  pip install -r requirements.txt
  ```

<br>


#### 4. Configure the WSGI file: 
  - Go to the "Web" tab and click on "Add a new web app". Follow the steps and choose "Manual configuration" (Python 3.8). In the "Code" section, go to the WSGI configuration file and modify it to point to your Django project. You can use the [backend\backend\wsgi.py](backend\backend\wsgi.py) file in your project as a reference.

#### 5. Set up the database: 
  - In the "Databases" tab, you can set up a new database and configure it to work with your Django project. Update the `DATABASES` setting in your [backend\backend\settings.py](backend\backend\settings.py) file to match the database credentials.

#### 6. Start the web app: 
  - Go back to the "Web" tab and click on "Reload" to start your web app.


<br>
<br>

Remember to update the `ALLOWED_HOSTS` setting in your [backend\backend\settings.py](backend\backend\settings.py) file to include your PythonAnywhere subdomain.

For more detailed instructions, you can refer to the [PythonAnywhere help pages](https://help.pythonanywhere.com/pages/DeployExistingDjangoProject/)

---

# Configure WSGI File
To configure the WSGI file for hosting on PythonAnywhere, you can follow these steps:

1. After logging into PythonAnywhere, go to the Web tab.
2. Create a new web app or select your existing web app.
3. In the Code section, you'll find a link to the WSGI configuration file. Click on it.
4. In the WSGI configuration file, you'll see some default code. You need to modify this to point to your Django project.
5. Comment out the existing code and it should look something like this:
   
    ```python
    import os
    import sys

    path = '/home/YourPythonAnywhereUsername/YourProjectName'
    if path not in sys.path:
        sys.path.append(path)

    os.environ['DJANGO_SETTINGS_MODULE'] = 'YourProjectName.settings'

    from django.core.wsgi import get_wsgi_application
    application = get_wsgi_application()
    ```

- Replace `YourPythonAnywhereUsername` with your PythonAnywhere username and `YourProjectName` with the name of your Django project.
- Save the changes to the WSGI configuration file.
Go back to the Web tab and hit the Reload button.
Your Django app should now be live on PythonAnywhere.
---

# Collect Static Files

To configure static files for your Django project on PythonAnywhere, follow these steps:


<!-- https://help.pythonanywhere.com/pages/DjangoStaticFiles/ -->
1. **`Collect static files`**: 
    - Run the `collectstatic` command in your Django project. This command collects all static files from your applications and places them into a single folder specified by the `STATIC_ROOT` setting in your Django settings file.
      ```bash
      python manage.py collectstatic
      ```

2. **`Configure static files on PythonAnywhere`**: 
    - Go to the "Web" tab on PythonAnywhere and scroll down to the "Static files" section. Click on the "Add a new static file" button.

3. **`Fill in the static files form`**: 
     - In the form that appears, fill in the following fields:
     - **URL**: This should be the URL that you want to serve your static files from. Typically, this is `/static/`.
     - **Directory**: This should be the path to the directory where you collected your static files (i.e., your `STATIC_ROOT`).



#### 4. Reload your web app: 
After saving your changes, click on the "Reload" button at the top of the "Web" tab to apply your changes.
- RU: После сохранения изменений нажмите кнопку "Reload" в верхней части вкладки "Web", чтобы применить изменения.

---

Now, PythonAnywhere will serve your static files at the URL you specified.
- RU: Теперь PythonAnywhere будет обслуживать ваши статические файлы по указанному вами URL-адресу.



# Configure Virtual Environment
Please note that PythonAnywhere doesn't support Pipfile.lock, so you might need to generate a requirements.txt file from your Pipfile. You can do this using the following command:

- `pipenv lock -r > requirements.txt` - is outdated
- 🎯 New version is: `pipenv run pip freeze > requirements.txt`