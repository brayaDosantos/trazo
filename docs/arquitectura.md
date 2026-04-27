# Arquitectura del Sistema
## Visión general
la libreria trazo está diseñada para gestionar la ejecución de consultas a base de datos de manera modular, separando responsabilidades en diferentes componentes.
## Componentes principales
-**Conexión:** Maneja la conexión a la base de datos.
-**Consultas:** Permite ejecutar sentencias SQL.
-**Resultados:** Procesa los resultados de la consultas.
-**Utilidades:** Manejo de errores y logs.
## Diagrama de arquitectura
trazo/
│
├── conexion/
├── consultas/
├── resultados/
└── utilidades/
## Tecnologías utilizadas
| Componente | Tecnología | Versión | Justificación |
|------------|------------|---------|---------------|
| Base       | java       |Lenguaje principal       |
| DB         | MySQL      | Base de datos           |
| Tests      | JUnit      | Pruebas                 | 
## Decisiones de diseño
**Contexto:** Separar responsabilidades
**Decisión:** Uso de módulos independientes
**Consecuencias:** Código más mantenible
### Decisión 1
**Contexto:** Se necesita organizar el código para que sea fácil de mantener y escalar.
**Decisión:** Separar la libería en módulos independientes (conexión, consultas, resultado, utilidades).
**Consecuencias:** El código es más ordenado, reutilizable y fácil de mantener.
### Decisión 2
**Contexto:** Se requiere manejar errores y eventos del sistema.
**Decisión:** Implementar un módulo de utilidades para logs y manejo de errores.
**Consecuencias:** Mejora el control del sistema y facilita la depuración.
## Flujo de datos
Usuario → Módulo de consultas → Base de datos → Módulo de resultado → Usuario