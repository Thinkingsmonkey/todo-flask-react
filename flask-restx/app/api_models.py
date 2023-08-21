from flask_restx import fields
from .extensions import api

# 必須在 student_model 定義之後才能使用 student_model 變數
# 所以要選擇一個顯示在畫面上
# course_model = api.model("Course", {
#     "id": fields.Integer,
#     "name": fields.String,
#     # "students": fields.List(fields.Nested(student_model))
# })

student_model = api.model("Student", {
    "id": fields.Integer,
    "name": fields.String,
    # "course": fields.Nested(course_model)
})


course_model = api.model("Course", {
    "id": fields.Integer,
    "name": fields.String,
    "students": fields.Nested(student_model)
})


course_input_model = api.model("CourseInput", {
    "name": fields.String
})


student_input_model = api.model("StudentInput", {
    "name": fields.String,
    "course_id": fields.Integer
})


login_model = api.model("LoginModel", {
    "username": fields.String,
    "password": fields.String
})

user_model = api.model("UserModel", {
    "id": fields.String,
    "username": fields.String
})