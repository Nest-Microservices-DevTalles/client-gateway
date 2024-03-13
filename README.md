## Cliente Gateway
El gateway es el punto de comunicación entre nuestros clientes y nuestros servicios. Es el encargado de recibir las peticiones, enviarlas a los servicios correspondientes y devolver la respuesta al cliente.


## Dev

1. Clonar el repositorio
2. Instalar dependencias
3. Crear un archivo `.env` basado en el `env.template`
4. Levantar el servidor de NATS
```
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```
5. Tener levantados los microservicios  que se van a consumir
6. Levantar proyecto con `npm run start:dev`



## Nats
```
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```


## Production build

1. Clonar el repositorio
2. Crear un archivo `.env.prod` basado en el `env.template`
3. Crear la imagen de docker con `docker build -t client-gateway . -f dockerfile.prod`

### Probar la imagen

1. Levantar el contenedor con 
`docker run -p 3000:3000 -e PORT=3000 -e NATS_SERVERS="nats://nats:4222" client-gateway`

