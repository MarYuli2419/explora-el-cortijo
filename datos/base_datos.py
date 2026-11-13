
import sqlite3
from pathlib import Path


class BaseDatos:
    def __init__(self):
        ruta = Path(__file__).resolve().parent / "cortijo.db"
        self.ruta = str(ruta)

    def conectar(self):
        return sqlite3.connect(self.ruta)

    def crear_tablas(self):
        with self.conectar() as conexion:
            conexion.execute("""
                CREATE TABLE IF NOT EXISTS lugares (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT NOT NULL,
                    categoria TEXT NOT NULL,
                    latitud REAL NOT NULL,
                    longitud REAL NOT NULL
                )
            """)
    def guardar_lugar(self, lugar):
         with self.conectar() as conexion:
                conexion.execute("""
            INSERT INTO lugares
            (nombre, categoria, latitud, longitud)
            VALUES (?, ?, ?, ?)
        """, (
            lugar.nombre,
            lugar.categoria,
            lugar.latitud,
            lugar.longitud
        ))
                
    def obtener_lugares(self):
        with self.conectar() as conexion:
            cursor = conexion.execute("""
                SELECT id, nombre, categoria, latitud, longitud
                FROM lugares
            """)
            return cursor.fetchall()

