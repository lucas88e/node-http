import { peliculas } from "./data.mjs";
import http from "node:http"


const server = http.createServer((req, res) => {
    res.write(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Lista de peliculas</title>
    <style>
    body{
        background-color: lightyellow
    }
    h2{
        color:blue
    }
    h1{
        color: green;
        text-align:center
    }
    .link{
        text-decoration:none
    }
    </style>
      </head>
      <body>
      <h1> Mis peliculas favoritas </h1>`)
    for (let i = 0; i < peliculas.length; i++) {
        res.write(`<div>
        <h2>${peliculas[i].titulo}</h2>
        <p><b>Director: </b>
       <a href="https://es.wikipedia.org/wiki/${peliculas[i].director}" class="link" target="_blank">${peliculas[i].director}</a></p>
        <p><b>Año:</b>  ${peliculas[i].año} </p>
       <p><b>Descripcion:</b>${peliculas[i].descripcion}</p>
       </div>
`)
    }

    res.end(`</body>
    </html>`)

})
server.listen(0, () => {
    console.log(`Este es el local host http://localhost:${server.address().port}`)
})
