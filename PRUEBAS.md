
# Módulo de pruebas
## Proyecto: Explora El Cortijo

### 1. Objetivo
Verificar que las funcionalidades de la
aplicación cumplen los requerimientos
establecidos para el proyecto.

### 2. Estrategia de pruebas
Se realizarán pruebas funcionales
desde el navegador y pruebas automatizadas
sobre los componentes de Python.

### 3. Casos de prueba

| ID | Funcionalidad | Resultado esperado |
|---|---|---|
| CP01 | Abrir la página | La página carga correctamente |
| CP02 | Consultar lugares | Se muestran los lugares registrados |
| CP03 | Buscar un lugar | Aparecen las coincidencias |
| CP04 | Filtrar categorías | Se muestran lugares de la categoría |
| CP05 | Consultar el mapa | Se visualizan los marcadores |
| CP06 | Seleccionar un marcador | Se muestra la información del lugar |
| CP07 | Consultar fotografías | Las imágenes se visualizan |
| CP08 | Consultar la API | Se devuelve información en JSON |

### 4. Pruebas automatizadas
El proyecto contiene el archivo:

pruebas/test_lugar.py

Este archivo permite verificar
el comportamiento de componentes
de la lógica de la aplicación.

### Resultados de las pruebas automatizadas

Comando ejecutado:
`python -m unittest discover -s pruebas -p "test_*.py" -v`

| Prueba | Resultado |
|---|---|
| test_crear_lugar | Aprobada |
| test_obtener_informacion | Aprobada |

Total: 2 pruebas ejecutadas.
Aprobadas: 2.
Errores: 0.

Resultado general: OK.

### Prueba de la API

**ID:** CP08

**Objetivo:** Verificar que la API devuelve
correctamente los lugares registrados.

**Ruta:** /api/lugares

**Resultado observado:**
La API devuelve un arreglo JSON con 6 lugares,
incluyendo nombres, categorías, descripciones,
imágenes y coordenadas cuando están disponibles.

**Estado:** APROBADA.
 
### CP03 - Búsqueda de lugares

**Objetivo:** Verificar que el buscador permite
encontrar lugares por su nombre.

**Procedimiento:**
1. Abrir la aplicación web.
2. Escribir "parque el cortijo".
3. Observar los resultados.

**Resultado esperado:**
Mostrar únicamente Parque El Cortijo.

**Resultado obtenido:**
Se muestra 1 resultado con fotografía,
nombre, categoría y descripción.

**Estado:** APROBADA.

### CP04 - Filtro por categorías

**Objetivo:** Verificar que el sistema permite
filtrar lugares según su categoría.

**Procedimiento:**
1. Abrir la aplicación web.
2. Dejar vacío el campo de búsqueda.
3. Seleccionar la categoría "Parques".
4. Revisar los resultados.

**Resultado esperado:**
Mostrar únicamente lugares de la categoría Parques.

**Resultado obtenido:**
Se muestran 3 lugares:
- Parque El Cortijo.
- Parque Nueva Granada.
- Parque Ciudadela Colsubsidio.

**Estado:** APROBADA.

### CP05 - Mapa interactivo

**Objetivo:** Verificar que los usuarios pueden
consultar la ubicación de los lugares.

**Procedimiento:**
1. Abrir la aplicación web.
2. Buscar Parque El Cortijo.
3. Hacer clic en "Ver ubicación en el mapa".
4. Observar el mapa y su marcador.

**Resultado esperado:**
Mostrar el lugar seleccionado en el mapa,
con su información correspondiente.

**Resultado obtenido:**
El mapa se centra en Parque El Cortijo
y muestra un marcador con fotografía y nombre.

**Estado:** APROBADA.

### CP06 - Galería fotográfica

**Objetivo:** Verificar la visualización ampliada
de fotografías.

**Procedimiento:**
1. Abrir la aplicación web.
2. Seleccionar la sección "Galería".
3. Hacer clic en una fotografía.
4. Observar la ventana de ampliación.

**Resultado esperado:**
Mostrar la fotografía ampliada con su
información y un botón para cerrar.

**Resultado obtenido:**
La fotografía se amplía correctamente,
mostrando el nombre del lugar, los créditos
y el botón de cierre.

**Estado:** APROBADA.

### CP07 - Navegación entre secciones

**Objetivo:** Verificar el funcionamiento
del menú de navegación.

**Procedimiento:**
1. Abrir la aplicación web.
2. Seleccionar "Planes".
3. Comprobar las actividades mostradas.
4. Seleccionar "Historia".

**Resultado obtenido:**
La sección Planes se muestra correctamente
con tres actividades recomendadas.

**Resultado obtenido:**
La navegación a las secciones Planes e Historia
funciona correctamente. Ambas muestran su
contenido y mantienen el diseño de la página.

**Estado:** APROBADA.


### 5. Registro de resultados
Los resultados se documentarán
después de ejecutar cada prueba.

| Prueba | Estado |
|---|---|
| CP01 | Aprobada |
| CP02 | Aprobada |
| CP03 | Aprobada |
| CP04 | Aprobada |
| CP05 | Aprobada |
| CP06 | Aprobada |
| CP07 | Aprobada |
| CP08 | Aprobada |

### 6. Criterios de aceptación
- La aplicación carga sin errores.
- Los lugares se muestran correctamente.
- El buscador y los filtros funcionan.
- El mapa muestra las ubicaciones.
- Las fotografías se visualizan.
- La API devuelve datos válidos.

### 7. Evidencias
Se podrán adjuntar capturas de pantalla
del navegador, resultados de las pruebas
automatizadas y registros del despliegue.
