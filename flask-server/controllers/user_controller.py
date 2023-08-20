from flask import Blueprint, request, jsonify
from models.db_config import db_pool
import mysql.connector
import models.user as user_model
import models.connect as connect_model
user_controller = Blueprint("user_cntroller", __name__)

@user_controller.route("/", methods = ["POST"])
def register():
    
    data = {
        "username": request.form.get("username"),
        "password": request.form.get("password"),
        "email": request.form.get("email"),
    }
    connection = connect_model.get_connect(db_pool)
    result = user_model.check_duplicate(connection["cursor"], data)
    if result != None: 
      connect_model.connect_close(connection["connection"])
      return jsonify({"message": "be used"}), 400
    result = user_model.register(connection["cursor"], data)
    return jsonify(data)