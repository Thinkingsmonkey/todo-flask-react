from flask_restx import Resource, Namespace
from flask_jwt_extended import jwt_required, get_jwt_identity,create_access_token, current_user, get_jwt
from werkzeug.security import generate_password_hash, check_password_hash
from app import db
from .api_models import course_model, student_model, course_input_model, student_input_model, login_model, user_model
from .models import Course, Student, User, generate_salt


# 類似 blueprint 設一個 url_prefix = "/api" 的意思
nspace = Namespace("api")

@nspace.route("/test")
class test(Resource):
    def get(self):
        return {"member":[
            "mamber1",
            "member2",
            "member3"
        ]}, 403

@nspace.route("/hello")
class Hello(Resource): # 繼承 Resource class
    
    # 使用 Resource 內建的函數，自定義各種支持的 http method
    def get(self):
        return {"hello": "restx"}

@nspace.route("/courses")
class CourseListAPI(Resource):
    method_decorators = [jwt_required()]

    @nspace.doc(security="jsonWebToken")
    @nspace.marshal_list_with(course_model) 
    # 將 marshall_list_with裝飾器下的函數的 return 值給經過 course_model 轉化為 json 格式
    # ! marshal 非 marshall
    def get(self):
        data = get_jwt()
        
        print("payload：",data["username"])
        return Course.query.all()
        # return Course.query.filter_by(instructor=current_user).all()
    
    @nspace.marshal_with(course_model)
    @nspace.expect(course_input_model) 
    # expect 預期接收的格式
    # 因為在商業邏輯裡只需要輸入 name 就能夠新增 course，所以要創一個新的 model 給新增用
    def post(self):
        course = Course(name=nspace.payload["name"])
        db.session.add(course) # 將要添加的資料模型放入 add 參數中
        db.session.commit()
        return course, 201 # 201 一般表示有新增


@nspace.route("/courses/<int:id>")
class CourseAPI(Resource):
    @nspace.marshal_with(course_model)
    def get(self, id):
        course = Course.query.get(id)
        return course
    
    @nspace.expect(course_input_model)
    @nspace.marshal_with(course_model)
    def put(self, id):
        course = Course.query.get(id)
        course.name = nspace.payload["name"]
        db.session.commit()
        return course, 200
    
    def delete(self, id):
        course = Course.query.get(id)
        db.session.delete(course)
        db.session.commit()
        return {}, 204 # 當前 course 已經被刪除

@nspace.route("/students")
class StudentListAPI(Resource):
    @nspace.marshal_list_with(student_model)
    def get(self):
        return Student.query.all()
    
    @nspace.marshal_with(student_model)
    @nspace.expect(student_input_model)
    def post(self):
        student = Student(name=nspace.payload["name"], course_id=nspace.payload["course_id"])
        db.session.add(student)
        db.session.commit()
        return student, 201
    

@nspace.route("/students/<int:id>")
class StudentAPI(Resource):
    @nspace.marshal_with(student_model)
    def get(self, id):
        student = Student.query.get(id)
        return student
    
    @nspace.expect(student_input_model)
    @nspace.marshal_with(student_model)
    def put(self, id):
        student = Student.query.get(id)
        student.name = nspace.payload["name"]
        student.course_id = nspace.payload["course_id"]
        db.session.commit()
        return student, 200
    
    def delete(self, id):
        student = Student.query.get(id)
        db.session.delete(student)
        db.session.commit()
        # return student, 204 當前 student 已經被刪除
        return {}, 204
    

@nspace.route("/register")
class Register(Resource):

    @nspace.expect(login_model)
    @nspace.marshal_with(user_model)
    def post(self):
        salt = generate_salt()
        user = User(username=nspace.payload["username"], password_hash=generate_password_hash(nspace.payload["password"] + salt), salt=salt)
        db.session.add(user)
        db.session.commit()
        return user, 201
    
@nspace.route("/login")
class Login(Resource):

    @nspace.expect(login_model)
    def post(self):
        user = User.query.filter_by(username=nspace.payload["username"]).first()
        if not user:
            return {"error": "User does not exist"}, 401
        if not check_password_hash(user.password_hash, nspace.payload["password"] + user.salt):
            return {"error": "Incorrect password"}, 401
        user_data = {"username": user.username, "content_id": 2}
        access_token = create_access_token(identity=user, additional_claims = user_data)
        return {"access_token": access_token}
    