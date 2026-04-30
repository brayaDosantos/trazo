# Guía de Despliegue

## Prerrequisitos

Antes de comenzar, asegúrate de tener:

- Node.js versión 16 o superior
- npm instalado

Verificar:

```bash
node -v
npm -v
```

---

## Entorno local

1. Clonar repositorio:

```bash
git clone https://github.com/sis-inf/trazo.git
cd trazo
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar pruebas:

```bash
npm test
```

---

## Uso en otro proyecto

Instalar paquete:

```bash
npm install trazo
```

Importar en tu proyecto:

```javascript
import { funcionEjemplo } from 'trazo';

funcionEjemplo();
```

---

## Variables de entorno

Actualmente no se requieren variables obligatorias.

Ejemplo:

```bash
NODE_ENV=development
API_URL=http://localhost:3000
```

---

## Producción

Publicar en npm:

```bash
npm login
npm publish
```

---

## Solución de problemas comunes

### npm no reconocido
- Instalar Node.js correctamente

### Error "Cannot find module"

```bash
npm install
```

### Fallo en tests

```bash
npm test
```
