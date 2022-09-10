
//Ingresar como maximo 10 edades con el prompt
//Sumar esas edades y dividirlas por la misma cantidad
//El usuario puede elegir la cantidad de edades a promediar, como maximo pueden ser 10
let sumaEdades = 0
let divisorEdades = 0
let cantidadEdadesaPromediar = 0
//Mostrar con un alert el resultado final
let repetir = true
while (repetir){
    if (cantidadEdadesaPromediar <= 0 || cantidadEdadesaPromediar > 10) {
        cantidadEdadesaPromediar = prompt ("Coloque la cantidad de edades, maximo 10")
    }else{
        repetir = false
    }
}

let edad = 0