from flask_restx import fields
from .extensions import api

# 必須在 student_model 定義之後才能使用 student_model 變數
# 所以要選擇一個顯示在畫面上
# course_model = api.model("Course", {
#     "id": fields.Integer,
#     "name": fields.String,
#     # "students": fields.List(fields.Nested(student_model))
# })

member_model = api.model("Members", {
    "id": fields.Integer,
    "username": fields.String,
    "email": fields.String
})
task_model = api.model("Tasks", {
    "id": fields.Integer(required=False),
    "member_id": fields.Integer,
    "title": fields.String,
    "priority": fields.String(required=False),
    "state": fields.String(required=False),
    "start": fields.DateTime(required=False),
    "deadline": fields.DateTime(required=False),
    "description": fields.String(required=False)
})




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