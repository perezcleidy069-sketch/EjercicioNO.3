//1. Crear un objeto estudiante
console.log("---Crear un objeto Estudiante---");

const estudiante={
    nombre:"Alejandra",
    apellido:"López",
    edad:23,
    cursos:"Mate"
}
console.log(estudiante);
let { curso: materia, nombre}=estudiante;
console.log(materia)

//2. Lista de estudiantes
console.log("---Lista de estudiantes---")

const estudiantes=[
    student={
        nombre:"María",
        edad:23,
        curso:"Ciencia sociales"
    },
    student={
        nombre:"Juan",
        edad:14,
        curso:"Ciencias Naturales"
    },
    student={
        nombre:"Edy",
        edad:26,
        curso:"Física",
    },
    student={
        nombre:"Fernanda",
        edad:22,
        curso:"Artes",
    },
    student={
        nombre:"Sandra",
        edad:28,
        curso:"Idioma inglés"
    }
]
console.log(estudiantes)

