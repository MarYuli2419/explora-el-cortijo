
class Lugar:
    def __init__(self, nombre, categoria, latitud, longitud):
        self.nombre = nombre
        self.categoria = categoria
        self.latitud = latitud
        self.longitud = longitud

    def obtener_informacion(self):
        return {
            "nombre": self.nombre,
            "categoria": self.categoria,
            "latitud": self.latitud,
            "longitud": self.longitud
        }
