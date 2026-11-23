# Explora El Cortijo — guía cultural y turística

Aplicación web Flask con guía editorial de lugares, historia documentada, buscador y mapa de referencia del sector.

## Ejecutar en Windows

```powershell
python -m pip install -r requirements.txt
python app.py
```

Abrir http://127.0.0.1:5000

## Comprobar

```powershell
python -m unittest discover -s pruebas
```

## Publicación

Incluye `render.yaml` y `Procfile` para desplegar Flask con Gunicorn en Render.
El enlace público se obtiene después de desplegar. El plan gratuito puede suspender la aplicación por inactividad.

## Datos y límites

El catálogo editorial se encuentra en `datos/catalogo.py`. Se basa en referencias públicas, no en visitas de campo.
La sección de gastronomía contiene sectores comerciales, no restaurantes individuales verificados.
Las fichas de lugares se abren dentro de la web y el mapa muestra el sector general; **no** se atribuyen coordenadas exactas a lugares sin verificar.
El círculo del mapa señala una **referencia aproximada**, no el perímetro oficial del barrio.
La base SQLite original se conserva para el componente de persistencia POO, pero el catálogo público no depende de ella.

Fuentes: Universidad Distrital (urbanización 1983); Secretaría Distrital de Ambiente (humedal Juan Amarillo);
Jardín Botánico (arbolado del sector); Secretaría de Cultura (leyenda de la Bruja del Cortijo).


## Servicios del diagrama MiBarrio
La sección **Servicios** incorpora las 11 consultas del diagrama de casos de uso.
Las consultas de transporte, veterinarias, policía, deporte, comida y zonas verdes abren búsquedas externas de Google Maps; las de catastro y polígonos abren Mapas Bogotá; movilidad, robos y cámaras enlazan a portales institucionales.
**Alcance:** no existe integración en tiempo real ni se almacenan reportes de delitos, polígonos propios o ubicaciones de cámaras. Las búsquedas externas requieren internet y pueden devolver resultados fuera del barrio.
