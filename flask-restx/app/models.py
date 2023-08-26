from .extensions import db 
import secrets
from sqlalchemy import func
from datetime import datetime, timedelta

class Member(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(500), nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    tasks = db.relationship("Task", back_populates="member", cascade="all, delete-orphan")

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    member_id = db.Column(db.Integer, db.ForeignKey("member.id"), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    priority = db.Column(db.Enum('High', 'Medium', 'Low'))
    state = db.Column(db.Enum('Todo', 'Doing', 'Done'))
    start = db.Column(db.DateTime, server_default=func.current_timestamp())
    deadline = db.Column(db.DateTime, default=datetime.now() + timedelta(days=1))
    description = db.Column(db.Text)
    member = db.relationship("Member", back_populates="tasks")




class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True)
    password_hash = db.Column(db.String(100))
    salt = db.Column(db.String(200))
    courses = db.relationship("Course", back_populates="instructor")


class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True)
    instructor_id = db.Column(db.ForeignKey("user.id"))
    
    students = db.relationship("Student", back_populates="course") 
    # 使用 back_populates 將兩者關連，主副表都必須使用相互關聯
    instructor = db.relationship("User", back_populates="courses")


class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True)
    course_id = db.Column(db.ForeignKey("course.id"))

    course = db.relationship("Course", back_populates="students")
    # 使用 back_populates 將兩者關連，主副表必須相互關聯

def generate_salt():
    return secrets.token_hex(16)
