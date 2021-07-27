// let lista = [
//   1, 2, 3, 4, 5, 5, 88, 88, 66, 33, 95, 88, 2, 3, 2, 1, 5, 5, 5, 88, 33, 22, 44,
// ];

// let objLista = {};

// lista.map(function (el) {
//   if (objLista[el]) {
//     objLista[el] += 1;
//   } else {
//     objLista[el] = 1;
//   }
// });

// let newArr = Object.entries(objLista).sort(function (valorViejo, nuevoValor) {
//   return valorViejo[1] - nuevoValor[1];
// });
// console.log(newArr);
// let moda = newArr[newArr.length - 1];
// console.log(moda);

//CODE ANTERIOR EN UNA FUNCION
function calcularModa(lista) {
  let cant = lista.reduce((cont, elemento) => {
    cont[elemento] = (cont[elemento] || 0) + 1;
    return cont;
  }, {});

  let arr = Object.entries(cant).sort(function (valorViejo, nuevoValor) {
    return valorViejo[1] - nuevoValor[1];
  });
  let moda = arr[arr.length - 1];
  console.log(moda);
}

calcularModa([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 5, 4, 4, 2, 1, 7, 7, 7, 7, 7, 6, 6, 4, 3, 1,
  2,
]);

//RETO DE MEDIA GEOMETRICA

function mediaGeometrica(valores) {
  let total = 1;
  for (var f = 0; f < valores.length; f++) {
    if (valores[f] != 0) {
      total = valores[f] * total;
    }
  }
  console.log(Math.pow(total, 1 / valores.length));
  console.log(total);
}

mediaGeometrica([2, 3, 14]);
