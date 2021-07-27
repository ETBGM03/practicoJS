// const valores = [20, 54, 85, 10, 69, 65, 78, 34];
// let inicial = 0;
// for (let i = 0; i < valores.length; i++) {
//   inicial = inicial + valores[i];
// }
// let promedio = inicial / valores.length;
// console.log(promedio);

function calcularMediaAritmetica(lista) {
  // let inicial = 0;
  // for (const i of lista) {
  //   inicial = inicial + i;
  // }
  // let promedio = inicial / lista.length;
  // console.log(promedio);
  let valorT = lista.reduce(function (valorI = 0, actual) {
    return valorI + actual;
  });
  let promedio = valorT / lista.length;
  console.log(promedio);
}
calcularMediaAritmetica([1, 14, 151, 98]);
