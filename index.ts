import * as express from "express";
import {AlumnoResource, ProfesorResource} from "./resources"

let app : express.Application = express();

let alumnoResource = new AlumnoResource();
let profesorResource = new ProfesorResource();
//Recurso Alumnos
app.get("/alumnos/:codigo",alumnoResource.get);

//se obtiene listado de alumnos
app.get("/alumnos", alumnoResource.getAll);


app.get("/profesores/:codigo",profesorResource.get);
app.get("/profesores", profesorResource.getAll);

app.listen(3000, () => {
    console.log("Servidor ejecutandose...");
});