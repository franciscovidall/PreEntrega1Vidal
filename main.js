let usuarioAutorizado = ("fvidal")
let passwordAutorizado = ("1234")

let usuarioIngresado = prompt ("Ingrese su nombre de usuario:")
console.log(usuarioIngresado)

let passwordIngresado = prompt ("Ingrese su contraseña:")
console.log(passwordIngresado)


if (usuarioIngresado === usuarioAutorizado && passwordIngresado === passwordAutorizado) {
    alert ("Los datos son correctos!")
} else{
    alert ("Los datos son incorrectos!")}


let notaPrimerParcial = parseInt (prompt("Ingrese la nota del primer parcial"))
let notaSegundoParcial = parseInt (prompt("Ingrese la nota del segundo parcial"))
console.log("El alumno " + usuarioAutorizado + " Primer nota: " + notaPrimerParcial + " Segunda nota: " + notaSegundoParcial)

console.log ("Promedio")

let promedio = ((notaPrimerParcial + notaSegundoParcial) / 2)
console.log (promedio)

if (promedio >= 6){
    alert ("Felicitaciones, aprobado! Su promedio es: " + promedio)
} else{
    alert ("No aprobado, su promedio es: " + promedio)
}