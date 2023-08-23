from flask import Flask
import datetime
from .extensions import api, db, jwt
from .resources import nspace
from .models import User
from flask_cors import CORS

def create_app():
    application = Flask(__name__)
    app = application
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite3"
    app.config["JWT_SECRET_KEY"] = "this secret key"
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(minutes=60)

    api.init_app(app)
    db.init_app(app)
    jwt.init_app(app)
    CORS(app)
    
    @jwt.user_identity_loader
    def user_identity_lookup(user):
        return user.id

    @jwt.user_lookup_loader
    def user_lookup_callback(_jwt_header, jwt_payload):
        identity = jwt_payload["sub"]
        return User.query.filter_by(id=identity).first()

    api.add_namespace(nspace)
    return app