// formulars for Temperature conversion
/**
 * Fahrenheit to Celsius  ---- ° C = 5/9 (° F - 32)
 * Celsius to Fahrenheit  ---- ° F = 9/5 ( ° C) + 32
 * Kelvin to Celsius      ---- ° C = K - 273
 * Celsius to Kelvin      ---- K = ° C + 273
 * Fahrenheit to Kelvin   ---- K = 5/9 (° F - 32) + 273
 */

// Get UL elements
const container = document.querySelector(".container"),
  unit = document.getElementById("unit"),
  from = document.getElementById("from"),
  to = document.getElementById("to"),
  message = document.querySelector(".message"),
  noToConvert = document.getElementById("convert");
let numb;

// Listen tp events
noToConvert.addEventListener("keyup", convert);
from.addEventListener("change", convert);
to.addEventListener("change", convert);
function convert() {
  const numbToConvert = parseInt(noToConvert.value),
    toV = to.value,
    fromV = from.value;

  if (to.value === from.value) {
    from.value = "celsuis";
    to.value = "fahrenheit";
  } else {
    if (fromV === "celsuis" && toV === "fahrenheit") {
      numb = CtoF(numbToConvert);
      message.innerHTML = `<span class ='red'> ${numbToConvert} &deg;C </span>    <i class="ri-arrow-left-right-line"></i>   <span class ='blue'> ${numb} &deg;F </span> `;
    } else if (fromV === "kelvin" && toV === "celsuis") {
      numb = KtoC(numbToConvert);
      message.innerHTML = `<span class ='red'> ${numbToConvert}K </span>    <i class="ri-arrow-left-right-line"></i>   <span class ='blue'> ${numb} &deg;C </span> `;
    } else if (fromV === "fahrenheit" && toV === "celsuis") {
      numb = FtoC(numbToConvert);
      message.innerHTML = `<span class ='red'> ${numbToConvert} &deg;F </span>    <i class="ri-arrow-left-right-line"></i>   <span class ='blue'> ${numb} &deg;C </span> `;
    } else if (fromV === "fahrenheit" && toV === "kelvin") {
      numb = FtoK(numbToConvert);
      message.innerHTML = `<span class ='red'> ${numbToConvert} &deg;F </span>    <i class="ri-arrow-left-right-line"></i>   <span class ='blue'> ${numb}K  </span> `;
    } else if (fromV === "celsuis" && toV === "kelvin") {
      numb = CtoK(numbToConvert);
      message.innerHTML = `<span class ='red'> ${numbToConvert} &deg;C </span>    <i class="ri-arrow-left-right-line"></i>   <span class ='blue'> ${numb}K </span> `;
    }
    // else {
    //   from.value = "celsuis";
    //   to.value = "fahrenheit";
    //   numb = CtoF(numbToConvert);
    //   message.innerHTML = `<span class ='red'> ${numbToConvert} &deg;C </span>    <i class="ri-arrow-left-right-line"></i>   <span class ='blue'> ${numb} &deg;F </span> `;
    // }
  }
}

// document.createtextnode

// Fahrenheit to Celsius
function FtoC(fahrenheit) {
  let c,
    f = fahrenheit,
    div = 5 / 9;
  c = div * (f - 32);
  return c;
}

// Celsius to Fahrenheit
function CtoF(celsius) {
  let f,
    c = celsius;
  f = (c * 9) / 5 + 32;
  return f;
}

// Kelvin to Celsius
function KtoC(kelvin) {
  let c,
    k = kelvin;
  c = k - 273;
  return c;
}

// Celsius to Kelvin
function CtoK(celsius) {
  let k,
    c = celsius;
  k = c + 273;
  return k;
}

// Fahrenheit to Kelvin

function FtoK(fahrenheit) {
  let k,
    f = fahrenheit;
  k = (5 / 9) * (f - 32) + 273;
  return k;
}

console.log(CtoK(50));
