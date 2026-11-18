
import unittest
from logica.lugar import Lugar


class TestLugar(unittest.TestCase):

    def test_crear_lugar(self):
        lugar = Lugar("Parque de ejemplo", "Parque", 4.7, -74.1)
        self.assertEqual(lugar.nombre, "Parque de ejemplo")

    def test_obtener_informacion(self):
        lugar = Lugar("Parque de ejemplo", "Parque", 4.7, -74.1)
        datos = lugar.obtener_informacion()
        self.assertEqual(datos["categoria"], "Parque")
        self.assertEqual(datos["latitud"], 4.7)


if __name__ == "__main__":
    unittest.main()
