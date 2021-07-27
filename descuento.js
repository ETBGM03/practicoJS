// Nuestros clientes están muy felices de poder calcular el precio final de sus productos después del descuento,
// pero la tienda tiene una nueva solicitud para nosotros: implementar descuentos con cupones.
let cupones = [1, 2, 3];

function calcularDescuento() {
  let cupon = document.getElementById("valorCupon");
  let valPrecio = Number(cupon.value);
  let numCupon = cupones.includes(valPrecio);
  if (valPrecio === 1 && numCupon === true) {
    let precio = document.getElementById("valorPrecio");
    let valPrecio = precio.value;
    let descuentoCupon = 10;
    // let descuento = document.getElementById("valorDesceunto");
    // let valdesc = descuento.value;
    let formula = (valPrecio * (100 - descuentoCupon)) / 100;
    let mens = document.getElementById("precioFinal");
    mens.innerHTML = `Precio final del producto: ${formula}`;
  } else if (valPrecio === 2 && numCupon === true) {
    let precio = document.getElementById("valorPrecio");
    let valPrecio = precio.value;
    let descuentoCupon = 25;
    // let descuento = document.getElementById("valorDesceunto");
    // let valdesc = descuento.value;
    let formula = (valPrecio * (100 - descuentoCupon)) / 100;
    let mens = document.getElementById("precioFinal");
    mens.innerHTML = `Precio final del producto: ${formula}`;
  } else if (valPrecio === 3 && numCupon === true) {
    let precio = document.getElementById("valorPrecio");
    let valPrecio = precio.value;
    let descuentoCupon = 35;
    // let descuento = document.getElementById("valorDesceunto");
    // let valdesc = descuento.value;
    let formula = (valPrecio * (100 - descuentoCupon)) / 100;
    let mens = document.getElementById("precioFinal");
    mens.innerHTML = `Precio final del producto: ${formula}`;
  } else {
    let precio = document.getElementById("valorPrecio");
    let valPrecio = precio.value;
    // let descuento = document.getElementById("valorDesceunto");
    // let valdesc = descuento.value;
    // let formula = (valPrecio * (100 - valdesc)) / 100;
    let mens = document.getElementById("precioFinal");
    mens.innerHTML = `El cupon no es valido, por lo tanto el precio es: ${valPrecio}`;
  }
}

const coupons = [
  {
    name: "JuanDC_es_Batman",
    discount: 15,
  },
  {
    name: "pero_no_le_digas_a_nadie",
    discount: 30,
  },
  {
    name: "es_un_secreto",
    discount: 25,
  },
];
// Ahora la función array.includes dejó de funcionar, pero podemos reemplazarla por la función array.find()
// para validar si el cupón que escribió el usuario está guardado en la propiedad name de alguno de los objetos
// en la lista de cupones.

// Vamos a crear una variable isUserCouponValueValid con una función que valide si su parámetro
// coupon es igual a nuestra variable userCouponValue. Y esta variable la vamos a enviar como parámetro
// a nuestra función array.find().

// const isCouponValueValid = function (coupon) {
//   return coupon.name === couponValue;
// };

// const userCoupon = coupons.find(isCouponValueValid);

// if (!userCoupon) {
//   alert("El cupón " + userCouponValue + "no es válido");
// }
// ¡Muy bien!

// Pero fíjate que ya tenemos nuestro cupón (con nombre y descuento) disponible en la nueva variable userCoupon.

// Podemos aprovechar esta variable para eliminar todos nuestros condicionales else if y cambiarlos por un condicional else que nos proporcione el porcentaje de descuento automáticamente, sin importar el cupón (válido) que estén usando nuestros usuarios.

// if (!userCoupon) {
//   alert("El cupón " + userCouponValue + "no es válido");
// } else {
//   const descuento = userCoupon.discount;
//   const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

//   const resultP = document.getElementById("ResultP");
//   resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
// }
