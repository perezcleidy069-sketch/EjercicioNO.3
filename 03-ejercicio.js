//1. Crear un objeto estudiante
console.log("---Crear un objeto Estudiante---");

const estudiante={
    name:"Alejandra",
    apellido:"López",
    edad:23,
    cursos:"Mate"
}
console.log(estudiante);
let {curso: materia, name}=estudiante;
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
for (let i of estudiantes){
    console.log(i.nombre)
}
//Promedio de notas por estudiante
console.log("---Promedio de notas por estudiante---")
const students=[
    id={
        nam:"Esteban",
        notas:[60, 70, 45, 23,56]
    },
    id={
        nam:"Pedro",
        notas:[60, 70, 95, 45,56]
    },
    id={
        nam:"Fabiola",
        notas:[90, 70, 95, 93,56]
    },
    id={
        nam:"Estela",
        notas:[66, 90, 45, 93,66]
    },
    function calcularNota(){
        for (let e=0; e<notas; e++){
            const total=0;
            total=total + notas[e];
            console.log(total);
        
        }
    }
]

//4.Buscar el estudiante mayor
console.log("---Buscar el estudiante mayour---")
console.log(estudiantes)
for (let d=0; d<edad.length; d++){
    let mayor=0;
    
}
