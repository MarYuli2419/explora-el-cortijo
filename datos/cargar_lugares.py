
import sqlite3
from pathlib import Path
from datos.catalogo import LUGARES

ruta = Path(__file__).parent / "cortijo.db"

with sqlite3.connect(ruta) as conexion:
    for lugar in LUGARES:
        conexion.execute("""
            INSERT INTO lugares
            (id, nombre, categoria, latitud, longitud,
             zona, descripcion, plan, imagen, tipo_imagen)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            lugar["id"],
            lugar["nombre"],
            lugar["categoria"],
            lugar["lat"],
            lugar["lon"],
            lugar["zona"],
            lugar["descripcion"],
            lugar["plan"],
            lugar["imagen"],
            lugar["tipo_imagen"]
        ))

print("Los 6 lugares se guardaron correctamente")
