import os
from flask import Flask, jsonify, render_template
from datos.base_datos import BaseDatos

app = Flask(__name__, template_folder="presentacion/templates",
            static_folder="presentacion/static")

@app.route("/")
def inicio():
    return render_template("index.html")

@app.route("/api/lugares")
def obtener_lugares():
    filas = BaseDatos().obtener_lugares()
    columnas = ["id", "nombre", "categoria", "lat",
                "lon", "zona", "descripcion", "plan",
                "imagen", "tipo_imagen"]
    lugares = [dict(zip(columnas, fila)) for fila in filas]
    return jsonify(lugares)

@app.route("/salud")
def salud():
    cantidad = len(BaseDatos().obtener_lugares())
    return jsonify(estado="ok", lugares=cantidad)

if __name__ == "__main__":
    app.run(debug=os.getenv("FLASK_DEBUG") == "1",
            port=int(os.getenv("PORT", "5000")))
