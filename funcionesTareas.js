const fs = require("fs");

let funcionesTareas = {
    archivoJson: "./tareas.json",
    leerArchivo: function() {
        const tareasJson = fs.readFileSync(this.archivoJson);
        const tareas = JSON.parse(tareasJson);
        return tareas;
   },

   listar: function(){
       const tareas = this.leerArchivo();
       tareas.forEach(function(tarea, index){
           console.log((index+1) + " - " + tarea.titulo + " : " + tarea.estado)
       })
   },

   escribirJSON: function(tareas){
    return fs.writeFileSync(this.archivoJson, JSON.stringify(tareas, null, " "));
   },
   
   guardarTarea: function(tarea){
    const tareas = this.leerArchivo();
    tareas.push(tarea);
    return this.escribirJSON(tareas);
   },
   
   filtrarPorEstado(estado){
      const tareas = this.leerArchivo();
      const tareasFiltradas = tareas.filter((tarea) => {
        return tarea.estado === estado;
    });
    return tareasFiltradas;
   }


}


module.exports = funcionesTareas;
