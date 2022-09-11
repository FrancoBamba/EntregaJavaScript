//Ingresar como maximo 10 edades con el prompt

//El usuario puede elegir la cantidad de edades a promediar, como maximo pueden ser 10

//Sumar esas edades y dividirlas por la misma cantidad

//Mostrar con un alert el resultado final



//Inicia variables

let sumaEdades = 0

let divisorEdades = 0

let cantidadEdadesaPromediar = 0

let edad = 0



//pregunta la cantidad de veces que tiene que preguntar la edad.

//Con el if corroboramos que el numero elejido sea entre 1 y 10

let repetir = true

while (repetir)

{

    if (cantidadEdadesaPromediar <= 0 || cantidadEdadesaPromediar > 10) {

        cantidadEdadesaPromediar = parseInt(prompt ("Coloque la cantidad de edades, maximo 10"))

    }else{

        repetir = false

    }

}



//bucle que pregunta las edades (el bucle pregunta la cantidad de veces que fue ingresado en la pregunta del while)

for(let i = 0; i < cantidadEdadesaPromediar; i++)

{

    edad = parseInt(prompt ("Escriba la edad " + (i+1)))

    sumaEdades = sumaEdades + edad

}

//asignamos la cantidad de edades seleccionada al divisor de edades

divisorEdades = cantidadEdadesaPromediar

//hacemos la cuenta

let resultado = sumaEdades/divisorEdades;

//mostramos el mensaje

let mensaje = alert("Promedios de las " + cantidadEdadesaPromediar + " edades es : " + resultado)