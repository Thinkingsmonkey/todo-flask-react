from flask import Flask,render_template
from controllers.user_controller import user_controller
app = Flask(__name__, static_folder="views/public", static_url_path="/")

app.config["SECRET_KEY"] = "This is secret!"

app.register_blueprint(user_controller, url_prefix = "/user")
@app.route("/")
def test():
  return render_template("index.html")

if __name__ == "__main__":
  app.run(debug=True)