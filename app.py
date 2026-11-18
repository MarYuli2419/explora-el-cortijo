import os
from flask import Flask, jsonify, render_template
from datos.catalogo import LUGARES

app = Flask(__name__, template_folder="presentacion/templates",
            static_folder="presentacion/static")

@app.route("/")
def inicio():
    return render_template("index.html")

@app.route("/api/lugares")
def obtener_lugares():
    return jsonify(LUGARES)

@app.route("/salud")
def salud():
    return jsonify(estado="ok", lugares=len(LUGARES))

if __name__ == "__main__":
    app.run(debug=os.getenv("FLASK_DEBUG") == "1",
            port=int(os.getenv("PORT", "5000")))
