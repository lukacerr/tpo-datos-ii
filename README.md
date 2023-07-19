# TPO Datos

##### Integrantes:

- Luka Cerrutti
- Francisco Ezequiel Gonzalez
- Ezequiel Banchio
- Augusto Cáceres
- Diego Martinez Auqui

# Como ejecutar

> Requisitos: Node.js, Python interpreter & Pip

1. Con una terminal en el repositorio, ejecutar `npm i` para instalar los packages del proyecto
2. Instalar el package requests de Python con `pip install requests`
3. Crear un archivo **.env** en el directorio _apps/api_, y llenarlo con los datos que aparecen [al final de este archivo](#env)
4. Cambiar el directorio de la terminal a la API (ejemplo, `cd apps/api`) y ejecutar `npm run dev`
5. Ejecutar el script de Python del archivo `app.py` (este mismo es el cliente como tal)

## PostgreSQL

> Utilizado para gestión de usuario.

- HOST: rajje.db.elephantsql.com
- PORT: 5432
- USER: termazje
- PASSWORD: 5eTIoNB1fJDmW9OCN1xr8PnFAVgB9guu
- DATABASE: termazje
- URL: postgres://termazje:5eTIoNB1fJDmW9OCN1xr8PnFAVgB9guu@rajje.db.elephantsql.com/termazje
  termazje:5eTIoNB1fJDmW9OCN1xr8PnFAVgB9guu

## MongoDB

> Almacena la información de los productos, así como de los pedidos.

- USER: admin
- PASSWORD: FVJnnAXvzD8vWVBV
- CONNECTION STRING: mongodb+srv://admin:FVJnnAXvzD8vWVBV@cluster.7d1ctuo.mongodb.net/?retryWrites=true&w=majority

## Redis

> Retiene la información de los carritos en hashes por usuario.

- USER: default
- PASSWORD: 9tya1zlUWCpei6QTZANb7CeBqsOoCp4t
- URL: redis-17807.c8.us-east-1-4.ec2.cloud.redislabs.com:17807
- DATABASE: Luka-free-db

# .env

```
PGSQL_HOST=rajje.db.elephantsql.com
PGSQL_PORT=5432
PGSQL_USER=termazje
PGSQL_PASSWORD=5eTIoNB1fJDmW9OCN1xr8PnFAVgB9guu
MONGO_URL=mongodb+srv://admin:FVJnnAXvzD8vWVBV@cluster.7d1ctuo.mongodb.net/?retryWrites=true
REDIS_HOST=redis-17807.c8.us-east-1-4.ec2.cloud.redislabs.com
REDIS_PORT=17807
REDIS_USER=default
REDIS_PASSWORD=9tya1zlUWCpei6QTZANb7CeBqsOoCp4t
```
