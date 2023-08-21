from flask import Flask

from .extensions import api, db, jwt
from .resources import nspace

def create_app():
    application = Flask(__name__)
    app = application
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite3"
    app.config["JWT_SECRET_KEY"] = "this secret key"

    api.init_app(app)
    db.init_app(app)
    jwt.init_app(app)

    api.add_namespace(nspace)
    return app