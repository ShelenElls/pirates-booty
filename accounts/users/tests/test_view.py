from django.test import TestCase, Client

class FeatureTests(TestCase):
    def test_black_installed(self):
        try:
            import black  
        except ModuleNotFoundError:
            self.fail("Could not find 'black' installed in the environment")

    def test_flake8_installed(self):
        try:
            import flake8  
        except ModuleNotFoundError:
            self.fail("Could not find 'flake8' installed in the environment")

