from .base import *

SECRET_KEY = 'h*9xvv-657w+5$0v@w2o9l4a6q8xwn@2qsac*pnmu1gz84zms='
DEBUG = True

# Database
# https://docs.djangoproject.com/en/1.9/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}