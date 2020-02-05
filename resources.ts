interface Alumno{
    codigo : string;
    nombre : string;
}

abstract class Resource {
    abstract get(req, res);
    abstract getAll(req, res);
    abstract post(req, res);
    abstract put(req, res);
    abstract delete(req, res);
}

export class ProfesorResource extends Resource {
    get(req: any, res: any) {
        throw new Error("Method not implemented.");
    }    getAll(req: any, res: any) {
        throw new Error("Method not implemented.");
    }
    post(req: any, res: any) {
        throw new Error("Method not implemented.");
    }
    put(req: any, res: any) {
        throw new Error("Method not implemented.");
    }
    delete(req: any, res: any) {
        throw new Error("Method not implemented.");
    }


}

export class AlumnoResource extends Resource{
    post(req: any, res: any) {
        throw new Error("Method not implemented.");
    }
    put(req: any, res: any) {
        throw new Error("Method not implemented.");
    }
    delete(req: any, res: any) {
        throw new Error("Method not implemented.");
    }
    static path : string = "/alumnos";
    
    get(req, res){
        let alumno : Alumno = {
            codigo : "20143333",
            nombre : "Pepe"
        }
        res.send(alumno);
    }
    
    getAll(req, res){
        let carrera = req.params.carrera;

        res.send([
            {
                codigo : "20143333",
                nombre : "Pepe"
            },
            {
                codigo : "20152222",
                nombre : "Patricia"
            }
        ]);
    }
}