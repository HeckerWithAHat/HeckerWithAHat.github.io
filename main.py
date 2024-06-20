from flask import Flask, request, render_template, send_file

app = Flask(__name__)
banned_files = ["main.py"]
colors = {
    "light_green": "0fc87d",
    "black":"080c0a",
    "green":"0c6436",
    "gray":"34343b",
    "dark_green":"0d341f",
    "light_gray":"84848c"
    }
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/languages")
def languages():
    return render_template("languages.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/<path:name>")
def get_file(name):
    try:
        if name in banned_files:
            return " "
        else:
            return send_file(name)
    except:
        return " "

if __name__ == "__main__":
    app.run(debug="true")