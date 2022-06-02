function saludo(){
    alert("Hola mundo esto es JS")
}

function suma(){

    var a;
    var b;
    var suma;

    alert("Este sistema realiza una suma con 2 valores ingresados por el usuario");

    a = parseInt(prompt("Por favor ingrese el primer valor"));
    b = parseInt(prompt("Por favor ingrese el segundo valor"));

    suma = a + b;

    alert("El resultado de la suma es: " + suma);
}

function resta(){

    var a;
    var b;
    var resta;

    alert("Este sistema realiza una resta con 2 valores ingresados por el usuario");

    a = parseInt(prompt("Por favor ingrese el primer valor"));
    b = parseInt(prompt("Por favor ingrese el segundo valor"));

    resta = a - b;

    alert("El resultado de la resta es: " + resta);
}

function multiplicacion(){

    var a;
    var b;
    var multiplicacion;

    alert("Este sistema realiza una multiplicación con 2 valores ingresados por el usuario");

    a = parseInt(prompt("Por favor ingrese el primer valor"));
    b = parseInt(prompt("Por favor ingrese el segundo valor"));

    multiplicacion = a * b;

    alert("El resultado de la multiplicación es: " + multiplicacion);
}

function division(){

    var a;
    var b;
    var division;

    alert("Este sistema realiza una división con 2 valores ingresados por el usuario");

    a = parseInt(prompt("Por favor ingrese el primer valor"));
    b = parseInt(prompt("Por favor ingrese el segundo valor"));

    division = a / b;

    alert("El resultado de la división es: " + division);
}

function mayor_numero(){

    var a;
    var b;

    alert("Este sistema determinara el numero mayor de 2 valores ingresados por el usuario");

    a = parseInt(prompt("Por favor ingrese el primer valor"));
    b = parseInt(prompt("Por favor ingrese el segundo valor"));

    if (a > b)
    alert("El primer valor agregado es mayor")
    else
    alert ("El segundo valor agregado es mayor");
}

function menor_3(){

    var a;
    var b;
    var c;

    alert("Este sistema determinara el numero menor de 3 valores ingresados por el usuario");

    a = parseInt(prompt("Por favor ingrese el primer valor"));
    b = parseInt(prompt("Por favor ingrese el segundo valor"));
    c = parseInt(prompt("Por favor ingrese el tercer valor"));

    if (a < b && a < c){
    alert("El primer valor ingresado es menor")}
    else if (b < a && b < c)
    alert("El segundo valor ingresado es menor")
    else 
    alert("El tercer valor ingresado es menor")
}

function par_impar(){

    var a;

    alert("Este sistema determinara si el numero digitado es par o impar");

    a = parseInt(prompt("Por favor ingrese el valor"));

    if(a%2!==0)
    alert("El numero digitado es impar")
    else
    alert("El numero digitado es par")
}

function num_cuadrado(){

    var a;
    var b;

    alert("Este sistema determinara el cuadrado de un numero digitado por el usuario");

    a = parseInt(prompt("Por favor ingrese el valor"));

    b = a * a

    alert("El cuadrado del numero digitado es: " + b)
}

function area_triangulo(){

    var a;
    var b;
    var c;

    alert("Este sistema determinara el area de un triangulo");

    a = parseInt(prompt("Por favor ingrese el valor de la base"));

    b = parseInt(prompt("Por favor ingrese el valor de la altura"));

    c = a * b / 2

    alert("El area del triangulo es: " + c)
}

function centimetros(){

    var a;
    var b;

    alert("Este sistema determinara los centimetros de un valor dado por el usuario en metros");

    a = parseInt(prompt("Por favor ingrese el valor de los metros"));

    b = a * 100

    alert("El valor ingresado en metros a centimetros es: " + b)
}

function nacio(){

    var a;
    var b;

    alert("Este sistema determinara el año en que nacio el usuario ingresando su edad");

    a = parseInt(prompt("Por favor ingrese el su edad"));

    b = 2022 - a

    alert("Su año de nacimiento es: " + b)
}

function intereses(){

    var a;
    var b;
    var c;
    var d;
    var e;

    alert("Este sistema determinara el usuario generara en un cantidad de tiempo por intereses");

    a = parseInt(prompt("Por favor ingrese el numero de años que desea invertir"));

    b = parseInt(prompt("Por favor ingrese el numero de capital a invertir"));

    c = a * 12
    d = c * 2
    e = d + b
    
    alert("El total de interes generado es de: " + e)
}

function colegio(){

    var a;
    var b;
    var c;
    var d;
    var e;
    var f;

    alert("Este sistema determinara el promedio de la calificaciones de un estudiante");

    a = parseInt(prompt("Por favor ingrese la primera nota"));

    b = parseInt(prompt("Por favor ingrese la segunda nota"));

    c = parseInt(prompt("Por favor ingrese la tercera nota"));

    d = parseInt(prompt("Por favor ingrese la cuarta nota"));

    e = parseInt(prompt("Por favor ingrese la quinta nota"));

    f = (a + b + c + d + e) / 5

    alert("El promedio de notas es:" + f)
}

function mercado(){

    var a;
    var b;
    var c;

    alert("Este sistema determinara el descuento de la compra de manzanas");

    a = parseInt(prompt("Por favor ingrese el numero de kilos de manzanas"));

    if (a <= 2) {
        b = 0;
        c = a * 4500;
        alert("El descuento de las manzanas es de: " + b);
        alert("El total es de: " + c)
    }
        else if (a >= 3 && a <= 5){
        b = a * 4500 * 0.10;
        c = (a * 4500) - b;
        alert("El descuento de las manzanas es de: " + b);
        alert("El total es de: " + c);
    }
    else if (a >= 6 && a <= 10){
        b = a * 4500 * 0.15;
        c = (a * 4500) - b;
        alert("El descuento de las manzanas es de: " + b);
        alert("El total es de: " + c);
    }   
    else if (a >= 3 && a <= 5){
    b = a * 4500 * 0.20;
    c = (a * 4500) - b;
    alert("El descuento de las manzanas es de: " + b);
    alert("El total es de: " + c)
    }
}