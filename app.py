
from flask import Flask, render_template, jsonify

from datos.base_datos import BaseDatos
app = Flask(
    __name__,
    template_folder="presentacion/templates",
    static_folder="presentacion/static"
)


@app.route("/")
def inicio():
    return render_template("index.html")


@app.route("/api/lugares")
def obtener_lugares():
    db = BaseDatos()
    lugares = db.obtener_lugares()

    resultado = []

    for lugar in lugares:
        resultado.append({
            "id": lugar[0],
            "nombre": lugar[1],
            "categoria": lugar[2],
            "latitud": lugar[3],
            "longitud": lugar[4]
        })

    return jsonify(resultado)



if __name__ == "__main__":
    app.run(debug=True)
