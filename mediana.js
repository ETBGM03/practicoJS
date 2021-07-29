//DE ESTA MANERA ESTAMOS LIMITADOS A QUE NUESTRA LISTA ESTÉ DEFINIDA
// let listaValor = [100, 200, 500, 400000000];
// function calcularMediaAritmetica(lista) {
//   let inicial = 0;
//   for (const i of lista) {
//     inicial = inicial + i;
//   }
//   let promedio = inicial / lista.length;
//   return promedio;
// }

// let mitad = parseInt(listaValor.length / 2);
// let veri = mitad % 2 === 0;
// let mediana;

// if (veri == true) {
//   let el1 = listaValor[mitad - 1];
//   let el2 = listaValor[mitad];
//   let promedioPar = parseInt(calcularMediaAritmetica([el1, el2]));
//   mediana = promedioPar;
//   console.log(mediana);
// } else {
//   mediana = listaValor[mitad];
//   console.log(mediana);
// }

//DE ESTA FORMA HACEMOS QUE NUESTRA FUNCION RECIBA UNA LISTA DE ELEMENTOS SIN SER DEFINIDOS
// function calcularMediaAritmetica(lista) {
//   let inicial = 0;
//   for (const i of lista) {
//     inicial = inicial + i;
//   }
//   let promedio = inicial / lista.length;
//   return promedio;
// }

// function calcularMediana(lista) {
//   let order = lista.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(order);
//   let mitad = parseInt(order.length / 2);
//   let veri = mitad % 2 === 0;
//   let mediana;

//   if (veri == true) {
//     let el1 = order[mitad - 1];
//     let el2 = order[mitad];
//     let promedioPar = parseInt(calcularMediaAritmetica([el1, el2]));
//     mediana = promedioPar;
//     console.log(mediana);
//   } else {
//     mediana = order[mitad];
//     console.log(mediana);
//   }
// }
// calcularMediana([100, 800, 500, 957, 200, 4000]);

//FUNCION QUE CALCULA LA MEDIANA CON CONTENIDO HTML
function calcularMediaAritmetica(lista) {
  let inicial = 0;
  for (const i of lista) {
    inicial = inicial + i;
  }
  let promedio = inicial / lista.length;
  return promedio;
}

function calcularMediana() {
  let v1 = document.getElementById("valorM1");
  let v2 = document.getElementById("valorM2");
  let v3 = document.getElementById("valorM3");
  let v4 = document.getElementById("valorM4");
  let v5 = document.getElementById("valorM5");
  let v6 = document.getElementById("valorM6");
  let arr = [];
  arr.push(
    Number(v1.value),
    Number(v2.value),
    Number(v3.value),
    Number(v4.value),
    Number(v5.value),
    Number(v6.value)
  );
  let validarCero = arr.filter((el) => {
    return el != 0;
  });
  let valorT = validarCero.sort(function (valorI, actual) {
    return valorI - actual;
  });
  let mitad = parseInt(valorT.length / 2);
  let veri = mitad % 2 === 0;
  let mediana;
  if (veri == true) {
    let el1 = valorT[mitad - 1];
    let el2 = valorT[mitad];
    let promedioPar = parseInt(calcularMediaAritmetica([el1, el2]));
    mediana = promedioPar;
    document.getElementById(
      "valorMediana"
    ).innerHTML = `La mediana de los volres es: ${mediana}`;
  } else {
    mediana = valorT[mitad];
    document.getElementById(
      "valorMediana"
    ).innerHTML = `La mediana de los volres es: ${mediana}`;
  }
}
