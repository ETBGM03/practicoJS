// const valores = [20, 54, 85, 10, 69, 65, 78, 34];
// let inicial = 0;
// for (let i = 0; i < valores.length; i++) {
//   inicial = inicial + valores[i];
// }
// let promedio = inicial / valores.length;
// console.log(promedio);

//Funcion sin html
// function calcularMediaAritmetica(lista) {
//   // let inicial = 0;
//   // for (const i of lista) {
//   //   inicial = inicial + i;
//   // }
//   // let promedio = inicial / lista.length;
//   // console.log(promedio);
//   let valorT = lista.reduce(function (valorI = 0, actual) {
//     return valorI + actual;
//   });
//   let promedio = valorT / lista.length;
//   console.log(promedio);
// }
// calcularMediaAritmetica([1, 14, 151, 98]);

//FUNCION CON HTML DEFINIDO

function calcularMediaAritmetica() {
  let valorInput1 = document.getElementById("valorNumero1");
  let valorInput2 = document.getElementById("valorNumero2");
  let valorInput3 = document.getElementById("valorNumero3");
  let valorInput4 = document.getElementById("valorNumero4");
  let arr = [];
  arr.push(
    Number(valorInput1.value),
    Number(valorInput2.value),
    Number(valorInput3.value),
    Number(valorInput4.value)
  );
  let valorT = arr.reduce(function (valorI = 0, actual) {
    return valorI + actual;
  });
  let promedio = valorT / arr.length;
  document.getElementById(
    "promedioFinal"
  ).innerHTML = `El promedio final es: ${promedio}`;
}
