### Requirement :

- Node JS
- Express JS
- MongoDB
- Mongoose

### Installation :

1. Clone project `git clone https://github.com/bimaagung/todo-mongodb.git`
2. Install package `npm install`
3. Configuration file `.env`

```json
HOST = localhost
PORT = 27017
DATABASE = todo
```

4. Run project in terminal `npm run start` or `npm run start-dev`

### API Spech

#### Create Note

Request :

- Method : POST
- Endpoint : `/api/notes`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "title": "string",
  "body": "string"
}
```

Response :

```json
{
  "status": "string",
  "data": {
    "title": "string",
    "body": "string"
  }
}
```

#### Show All Note

Request :

- Method : GET
- Endpoint : `/api/notes`
- Header :
  - Content-Type: application/json

Response :

```json
{
  "status": "string",
  "data": {
    "id": "string, unique",
    "title": "string",
    "body": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
}
```

#### Show Note By Id

Request :

- Method : GET
- Endpoint : `/api/notes/{id}`
- Header :
  - Content-Type: application/json

Response :

```json
{
  "status": "string",
  "data": {
    "id": "string, unique",
    "title": "string",
    "body": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
}
```
