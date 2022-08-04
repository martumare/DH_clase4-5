const funcionesTareas = require("./funcionesTareas")
const argumento = process.argv[2];


switch(argumento){
    case "listar": {
        console.log("")
        console.log("------------------------------");
        funcionesTareas.listar();
        console.log("------------------------------");
        break;
    }
    
    case "crear": {
        const tituloNuevaTarea = process.argv[3];
        const nuevaTarea = {
            titulo: tituloNuevaTarea,
            estado: "pendiente"
        };
        funcionesTareas.guardarTarea(nuevaTarea);
        console.log("")
        console.log("Nueva tarea creada")
        console.log("---------------------------")
        console.log(nuevaTarea.titulo + " : " + nuevaTarea.estado)
        console.log("--------------------------")
        break;
    }

    case "filtrar": {
        let estado = process.argv[3];
        console.log("")
        console.log("----------------------------")
        console.log("Tareas en estado: " + estado)
        console.log("----------------------------")
        let filtradas = funcionesTareas.filtrarPorEstado(estado);
        filtradas.forEach((tarea, index) => {
            console.log((index + 1) + ". " + tarea.titulo);
        });
        console.log("");
        break;
    }

    case undefined: {
        console.log("")
        console.log("-------------------------------------------------");
        console.log("     Atencion - Tienes que pasar una accion     ");
        console.log("-------------------------------------------------");
        break;
    }

    default: {
        console.log("")
        console.log("------------------------------------------");
        console.log("      No entiendo que quieres hacer    ");
        console.log("------------------------------------------");
    }
}
