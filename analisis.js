//Helpers (no hacen parte de la logica pero son funcionales para los calculos)
function esPar(num) {
  return num % 2 === 0;
}

function calcularMediaAritmetica(lista) {
  let inicial = 0;
  for (const i of lista) {
    inicial = inicial + i;
  }
  let promedio = inicial / lista.length;
  return promedio;
}
//Calculadora de meiana
function mediaSalario(list) {
  let mitad = parseInt(list.length / 2);
  if (esPar(list.length)) {
    let p1 = list[mitad - 1];
    let p2 = list[mitad];
    let mediana = calcularMediaAritmetica([p1, p2]);
    return mediana;
  } else {
    let personMitad = list[mitad];
    return personMitad;
  }
}

//Mediana general
let salarioCol = colombia.map(function (person) {
  return person.salary;
});

let orderSalary = salarioCol.sort((a, b) => {
  return a - b;
});

const salarioColOrdenado = mediaSalario(orderSalary);

//Mediana del top 10%
let spliceStart = (orderSalary.length * 90) / 100;
let spliceCont = orderSalary.length - spliceStart;
let salriotop = orderSalary.splice(spliceStart, spliceCont);

const salarioTop10 = mediaSalario(salriotop);

console.log({ salarioColOrdenado, salarioTop10 });

// En este módulo pusimos en práctica todo lo que aprendimos en los talleres pasados para calcular la mediana de salarios de tu país (aunque por ahora son solo datos ficticios).

// Para completar el reto de este último taller solo debes dejar volar tu imaginación y usar todas las herramientas que aprendiste para expandir tu análisis salarial.

// ¿Cómo? Como quieras
// Puedes calcular la mediana de ingresos no fijos, capacidad de ahorro, capacidad de endeudamiento, recolección de impuestos, diferencia salarial, relación entre formalidad/informalidad y pobreza/riqueza…

// El reto es de tema libre. Escoge la pregunta que prefieras, incluso mejor si has vivido una situación parecida alguna vez, resuélvela y muéstranos tu solución en los comentarios.

// Para lograrlo solo debes seguir los siguientes pasos:

// Plantea muy detalladamente el problema/análisis/cálculo/hipótesis que quieres resolver.
// Encuentra las fórmulas necesarias para resolver el dilema que seleccionaste.
// Define las variables y funciones para resolver tus fórmulas.
// Presenta los resultados de tu informe en una página web dinámica usando HTML, CSS y JavaScript.
// Organiza y documenta tu código para que sea más fácil de leer y entender.
// Publícalo en tu repositorio de GitHub y muéstranos el link en la sección de comentarios.
// Te recomiendo que inicies con una pregunta sencilla. Pon un tiempo límite generoso, desarrolla tu proyecto hasta el final y publica tus resultados en la sección de comentarios.

// Luego vuelve a empezar con una pregunta más compleja. Y así sucesivamente hasta que tu estudio de salarios sea el proyecto del que más orgullosa te puedas sentir.
