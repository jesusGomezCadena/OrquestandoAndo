from fastapi import FastAPI
import httpx

app = FastAPI()

@app.get("/cris")
async def orquestar():
    async with httpx.AsyncClient() as client:
        try:
            respuesta_cris = await client.get("http://servicio-cris-service/gustos")
            data_cris = respuesta_cris.json()
        except httpx.RequestError:
            data_cris = "El servicio de cristian no está disponible"

    return {"Persona": data_cris}

@app.get("/jhon")
async def orquestar():
    async with httpx.AsyncClient() as client:
        try:
            respuesta_jhon = await client.get("http://servicio-jhon-service/api/information")
            data_jhon = respuesta_jhon.json()
        except httpx.RequestError:
            data_jhon = "El servicio de jhon no está disponible"

    return {"Persona": data_jhon}

@app.get("/alejo")
async def orquestar():
    async with httpx.AsyncClient() as client:
        try:
            respuesta_alejo = await client.get("http://alejandro-service/gustos")
            data_alejo = respuesta_alejo.json()
        except httpx.RequestError:
            data_alejo = "El servicio de Alejo no está disponible"

    return {"Persona": data_alejo}


@app.get("/camilo")
async def orquestar():
    async with httpx.AsyncClient() as client:
        try:
            respuesta_cami = await client.get("http://servicio-camilo-service/api/informacion")
            data_cami = respuesta_cami.json()
        except httpx.RequestError:
            print(httpx.RequestError)
            data_cami = "El servicio de Camilo no está disponible"

    return {"Persona": data_cami}
    


@app.get("/laura")
async def orquestar():
    async with httpx.AsyncClient() as client:
        try:
            respuesta_laura = await client.get("http://servicio-laura-service/gustos")
            data_laura = respuesta_laura.json()
        except httpx.RequestError:
            data_laura = "El servicio de Laura no está disponible"

    return {"Persona": data_laura}