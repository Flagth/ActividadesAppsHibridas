const Alumno = require('./Alumno.js');
/*const fs = require('fs/promises');
const path = "notas.txt";

const leerArchivo = async () => {
    
    const data = await fs.readFile(path);
    console.log(data.toString());
}

const guardar = async (texto) => {
    await fs.writeFile(path, texto);
}

leerArchivo();
guardar("anashei");*/

let nombre = "Jeremias";
const alumno1 = new Alumno(nombre, "Ramirez Calvo", 21, "DW");

// Modificar edad
alumno1.modificarEdad(22);
console.log("Edad modificada:", alumno1.retornarEdad()); 

// Agregar materias
alumno1.agregarMateria("Programación I");
alumno1.agregarMateria("Base de Datos");
alumno1.agregarMateria("Diseño Web");

// Mostrar materias
console.log("Materias del alumno:");
alumno1.mostrarMaterias(); 

// Mostrar carrera
console.log("Carrera:", alumno1.obtenerCarrera());

// Mostrar nombre y apellido
console.log("Datos del alumno:", alumno1.obtenerDatos());
