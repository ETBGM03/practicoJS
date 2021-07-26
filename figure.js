// console.group("Cuadrados");
// let l1 = 5;
// result = l1 * 4;
// let area = l1 * l1;
// console.log(
//   `El perimetro del cuadrado es: ${result}, el área del cuadrado es: ${area} cm^2`
// );
// console.groupEnd();
// function cuadrado(peri) {
//   let perimetroC = peri * 4;
//   let areaC = perimetroC * perimetroC;
//   return console.log(`permietro: ${perimetroC}, área es: ${areaC}`);
// }
// cuadrado(18);

// console.group("Triángulo");
// let tl1 = 6;
// let tl2 = 6;
// let bt = 4;
// resultTriangulo = tl1 + tl2 + bt;
// alturaTriangulo = 5.5;
// areaTriangulo = (bt * alturaTriangulo) / 2;
// console.log(
//   `El perimetro del triangulo es: ${resultTriangulo}, y el area es: ${areaTriangulo}`
// );
// console.groupEnd();

// function triangulo(l1, l2, bt, altura) {
//   let peri = l1 + l2 + bt;
//   let areaT = (bt * altura) / 2;
//   return console.log(`permietro: ${peri}, área es: ${areaT}`);
// }
// triangulo(6, 6, 4, 5.5);

// console.group("Circulo");
// let radioC = 8;
// let diametroC = radioC * 2;
// let pi = Math.PI;
// let perimetroC = diametroC * pi;
// let areaC = Math.pow(radioC, 2) * pi;
// console.log(
//   `El perimetro del circulo es: ${perimetroC} y el área es: ${areaC}`
// );
// console.groupEnd();
// function circulo(radio) {
//   let rad = radio;
//   let diam = rad * 2;
//   let pi = Math.PI;
//   let permietro = diam * pi;
//   let areaC = Math.pow(rad, 2) * pi;

//   return console.log(`permietro: ${permietro}, área es: ${areaC}`);
// }
// circulo(8);

//FUNCIONES QUE ESTÁN CONECTADAS CON HTML
//Cuadrado
// function cuadradoP() {
//   let input = document.getElementById("valorInput");
//   let valor = input.value;
//   perimetro = valor * 4;
//   alert(`El perimetro es: ${perimetro}`);
// }

// function cuadradoA() {
//   let input = document.getElementById("valorInput");
//   let valor = input.value;
//   area = valor * valor;
//   alert(`El área es: ${area}`);
// }

// //Triangulo
// function trianguloP() {
//   let lado1 = document.getElementById("valorLado1");
//   let lado2 = document.getElementById("valorLado2");
//   let base = document.getElementById("valorBase");
//   let valor = Number(lado1.value);
//   let valor2 = Number(lado2.value);
//   let valor3 = Number(base.value);
//   perimetro = valor + valor2 + valor3;
//   alert(`El perimetro es: ${perimetro}`);
// }

// function trianguloA() {
//   let base = document.getElementById("valorBase");
//   let input = document.getElementById("valorAltura");
//   let valor = input.value;
//   let valor2 = base.value;
//   area = (valor * valor2) / 2;
//   alert(`El área es: ${area}`);
// }

// //Circulo
// function circuloP() {
//   let input = document.getElementById("valorRadio");
//   let valor = input.value;
//   let diametro = valor * 2;
//   let pi = Math.PI;
//   perimetro = diametro * pi;
//   alert(`El perimetro es: ${perimetro}`);
// }

// function circuloA() {
//   let input = document.getElementById("valorRadio");
//   let valor = input.value;
//   let pi = Math.PI;
//   area = valor * valor * pi;
//   alert(`El área es: ${area}`);
// }

// En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

// La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
// La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
// La función debe retornar la altura del triángulo.
// Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.

function trianguloIsoceles(lado1, lado2, base) {
  let a = lado1;
  let b = lado2;
  let c = base;
  if (a === b && a != base) {
    let d = c / 2;
    let p = Math.pow(b, 2);
    let o = Math.pow(d, 2);
    let h = p - o;
    let u = Math.sqrt(h);
    alert(u);
  } else {
    alert("NO es un triangulo isóceles");
  }
}

trianguloIsoceles(5, 5, 8);
