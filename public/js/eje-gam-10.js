function suma(){
    var resultado = document.getElementById("resultado");
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var suma = num1+num2;
    resultado.innerHTML = suma;
}
function resta(){
    var resultado = document.getElementById("resultado");
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resta = num1-num2;
    resultado.innerHTML = resta;
}
function multi(){
    var resultado = document.getElementById("resultado");
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var multi = num1*num2;
    resultado.innerHTML = multi;
}
function dividir(){
    var resultado = document.getElementById("resultado");
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var dividir = num1/num2;
    resultado.innerHTML = dividir;
}
const num1 = document.getElementById("num1");

num1.addEventListener("focus", function() {
  this.removeAttribute("placeholder");
});

num1.addEventListener("blur", function() {
  if (this.value === "") {
    this.setAttribute("placeholder", "0");
  }
});

const num2 = document.getElementById("num2");

num2.addEventListener("focus", function() {
  this.removeAttribute("placeholder");
});

num2.addEventListener("blur", function() {
  if (this.value === "") {
    this.setAttribute("placeholder", "0");
  }
});