
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
                    latitud REAL,
                    longitud REAL,
                    zona TEXT,
                    descripcion TEXT,
                    plan TEXT,
                    imagen TEXT,
                    tipo_imagen TEXT
                )
            """)

    
    def guardar_lugar(self, lugar):
        with self.conectar() as conexion:
            conexion.execute("""
                INSERT INTO lugares
                (nombre, categoria, latitud, longitud,
                 zona, descripcion, plan, imagen, tipo_imagen)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                lugar.nombre,
                lugar.categoria,
                lugar.latitud,
                lugar.longitud,
                lugar.zona,
                lugar.descripcion,
                lugar.plan,
                lugar.imagen,
                lugar.tipo_imagen
            ))

                
   
    def obtener_lugares(self):
        with self.conectar() as conexion:
            cursor = conexion.execute("""
                SELECT id, nombre, categoria,
                       latitud, longitud, zona,
                       descripcion, plan, imagen,
                       tipo_imagen
                FROM lugares
            """)
            return cursor.fetchall()


