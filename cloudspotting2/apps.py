from importlib import import_module

from django.apps import AppConfig as BaseAppConfig


class AppConfig(BaseAppConfig):

    name = "cloudspotting2"

    def ready(self):
        import_module("cloudspotting2.receivers")
