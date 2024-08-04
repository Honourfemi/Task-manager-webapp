# Configuration file for the Flask application

import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    # Database URI
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'tasks.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
