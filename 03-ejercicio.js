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
        curso:"Ciencia sociales",
         notas:[60, 70, 45, 23,56]
    },
    student={
        nombre:"Juan",
        edad:14,
        curso:"Ciencias Naturales",
         notas:[60, 80, 95, 33,96]
    },
    student={
        nombre:"Edy",
        edad:26,
        curso:"Física",
         notas:[60, 80, 85, 83,86]
    },
    student={
        nombre:"Fernanda",
        edad:22,
        curso:"Artes",
         notas:[66, 78, 68, 33,76]
    },
    student={
        nombre:"Sandra",
        edad:28,
        curso:"Idioma inglés",
        notas:[90, 50, 75, 33,56]
    }
]
console.log(estudiantes)
for (let i of estudiantes){
    console.log(i.nombre)
}
//Promedio de notas por estudiante
console.log("---Promedio de notas por estudiante---")
console.log(estudiantes)
for (const estud of estudiantes){
    let suma =0;


    for(const nota of estud.notas){
        suma +=nota;
    }
    let promedio=suma/estud.notas.length;
console.log('Estudiante ${estudiantes.nombre} Promedio ${promedio:tofixed(2)}')
}


//4.Buscar el estudiante mayor
console.log("---Buscar el estudiante mayour---")
let estudianteMayor=estudiantes[0];
for (let e =1; e <estudiantes.length; e++){
}
if (estudiantes[e].edad>estudianteMayor.edad){
    estudianteMayor=estudiantes[e];
}
console.log('Nombre ${estudianteMayor.nombre}');
console.log('edad ${estudianteMayor.edad}años');

//5.Filtrar estudiantes aprobados
console.log("----Estudiantes aprobados---")
for (const est of estudiantes){
    let sum=0;
    for (const n of est.notas) suma+=n;
    let promedio =suma/est.notas.length
    if (promedio>=60 ){
        console.log('Aprobado: ${est.nombre} con ${promedio.tofixed(2)}')
    }
}
//6. Desestructurar dentro de un ciclo
console.log("6. Desestructurar dentro de un ciclo");
console.log("estudiantes");

for (let {nombre, edad} of estudiantes){
    console.log(nombre, edad)
}
//7. Crear un Set de materias
console.log("7. Crear un Set de materias")
console.log(estudiante)

const materias= new set();
materias.add("Educación físcia");
materias.add("Manualidades")

console.log(materias);

//8.Convertir un arreglo a set
console.log("8.Convertir un arreglo a set")
const numertos=[1,2,3,4,5,6,7,8,9];
const unicos =new set(numertos);
console.log(unicos);

//9. Crear un Map de productos
console.log("Crear un Map de productos");
const productos=new Map();
productos.set("Fresas", 5);
productos.set("Bananos", 23);
productos.set("Naranja", 2);
console.log(productos);

//10. Calcular el total del carrito usando Map
console.log("10. Calcular el total del carrito usando Map");
console.log(productos)
let to=0;
productos.forEach(Precio)=>{
    to+=precio;
};
console.log(to);

//11. Verificar existencia en Map
console.log("11. Verificar existencia en Map")
console.log(productos);
const buscar="Fresas";
console.log(productos.has(buscar))

//12. Objeto con métodos
console.log("12. Objeto con métodos");
const articulos={
    articulo:"Granada",
    cantidad:23,
    agregar: function(amount){
        this.cantidad+=amount;
        console.log(this.cantidad);

    }
};
articulos.agregar(23);

//13. Lista de objetos productos
console.log("13. Lista de objetos productos");
const items=[
    {itme:"Carne", price:23, categoria:"rojo"},
    {item:"Pollo", price:43, categoria:"blanca"},
    {item:"pescado", price:43,  categoria:"blanca"},
]
for (let p of itmes){
    i(p.categoria==="blanca"),console.log(p.nombre)
}

//14. Ordenar productos por precio
console.log("14. Ordenar productos por precio")
productos.sort((a, b)=>a.precio - b.precio);
console.log(productos);

//15. Desestructuración anidada
console.log("15. Desestructuración anidada")
const perfil={
    no:"Ana",
    ubicacion:{
        ciudad:"Guatemala",
        pais:"Guatemala",
        direccion:"5 avendiad 12-43"
    }
};
const {no, ubicacion:{direccion } }=perfil
console.log(direccion)

//16. Contar elementos únicos con Set
console.log("16. Contar elementos únicos con Set")
const deportes=["futbol", "basketball", "tenis", "futbol"]
const unique=new set(deportes);
console.log(unicos.size);

//17. Crear un Map a partir de un arreglo
console.log("17. Crear un Map a partir de un arreglo")
const productosMap=new Map(productos.map(p =>[p.no, p.precio]));
//18. Eliminar elementos de un Set
console.log("18. Eliminar elementos de un Set")
let verduras=(["tomate", "cebolla", "papa"])
console.log(verduras)
verduras.delete("tomate");
console.log(verduras);

//19. Recorrer un Map con desestructuración

console.log("19. Recorrer un Map con desestructuración")

console.log(productos);
for (const [producto, precio] of productos){
    console.log(producto, precio);

}

//20. Mini sistema de biblioteca
console.log_("20. Mini sistema de biblioteca")
const biblioteca = [
    { titulo: "Cien años de soledad", autor: "Gabo", estado: "disponible" },
    { titulo: "El Quijote", autor: "Cervantes", estado: "prestado" },
    { titulo: "Rayuela", autor: "Cortázar", estado: "disponible" }
];

console.log("Libros disponibles:");
for (const libro of biblioteca) {
    if (libro.estado === "disponible") {
        console.log(`- ${libro.titulo} (${libro.autor})`);
    }
}