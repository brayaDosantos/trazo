# Documentación de API

## Base URL

http://localhost:PUERTO

## Endpoints

### GET /biseccion
*Descripción:* Calcula raíces usando método de bisección.

*Parámetros:*
- f: función matemática
- a: límite inferior
- b: límite superior
- tol: tolerancia

*Respuesta:*
json
{
  "resultado": 2.0
}


### GET /trapecio
*Descripción:* Calcula integrales usando método trapecio.

*Parámetros:*
- f: función matemática
- a: inicio intervalo
- b: fin intervalo
- n: divisiones

*Respuesta:*
json
{
  "resultado": 5.33
}


### GET /gaussJordan
*Descripción:* Resuelve sistemas lineales.

*Parámetros:*
- matriz: matriz aumentada

*Respuesta:*
json
{
  "resultado": [1,2,3]
}


### GET /derivada
*Descripción:* Calcula derivada numérica.

*Parámetros:*
- f: función
- x: punto

*Respuesta:*
json
{
  "resultado": 4
}


### GET /newtonRaphson
*Descripción:* Calcula raíces con Newton Raphson.

*Parámetros:*
- f: función
- x0: valor inicial
- tol: tolerancia

*Respuesta:*
json
{
  "resultado": 1.414
}


## Códigos de error

| Código | Descripción |
|---|---|
| 200 | OK |
| 400 | Bad Request |
| 500 | Internal Server Error |
