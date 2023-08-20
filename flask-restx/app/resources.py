from flask_restx import Resource, Namespace

# 類似 blueprint 設一個 url_prefix = "/api" 的意思
nspace = Namespace("api")

@nspace.route("/hello")
class Hello(Resource): # 繼承 Resource class
    
    # 定義各種支持的 method
    def get(self):
        return {"hello": "restx"}
    
    