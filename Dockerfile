FROM python:3.9.0

WORKDIR /home/

# RUN echo 'abcde'

RUN git clone https://github.com/TTioTTi/gis_drf_2.git

WORKDIR /home/gis_drf_2/

RUN pip install -r requirements.txt

RUN pip install gunicorn

RUN pip install mysqlclient

EXPOSE 8000

CMD ["bash", "-c", "python manage.py collectstatic --noinput --settings=gis_drf_2.settings.deploy && python manage.py migrate --settings=gis_drf_2.settings.deploy && gunicorn --env DJANGO_SETTINGS_MODULE=gis_drf_2.settings.deploy gis_drf_2.wsgi --bind 0.0.0.0:8000"]