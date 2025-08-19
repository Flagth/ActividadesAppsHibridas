class Alumno {
    // Atributos
    nombre = "";
    apellido = "";
    edad;
    carrera = "";
    materias = [];

    constructor(nombre, apellido, edad, carrera, materias = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
        this.materias = materias;
    }

    // Métodos
    obtenerCarrera() {
        return this.carrera;
    }

    obtenerDatos() {
        return `${this.nombre} ${this.apellido}`;
    }

    modificarEdad(edad) {
        this.edad = edad;
    }

    agregarMateria(materia) {
        this.materias.push(materia);
    }

    mostrarMaterias() {
        console.log(this.materias);
    }

    retornarEdad() {
        return this.edad;
    }
}

module.exports = Alumno;
