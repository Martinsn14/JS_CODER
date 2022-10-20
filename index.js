// mi comentario una sola linea

/* comentario muchas lineas

fin

ctr + k + c (Comentar varias lineas)
ctr + k + u (descomentar)

Particularidades:

Diferencia entre May y min, 
No se definen tipo de variables.
*/

//para mostrar info por consola

console.log('mi primera consola')

//Es nesesario para DEV luego se quita


//para interactuar con usuario, pide info al usuario
//prompt ('Cual es tu nombre') siempre devuelve un string

//para dar mensaje al usuario
//alert ('Hola estas en mi web')

//declarar variable sin espacio ni caracter especial
//let (variable puede ser global o local) - const (constante)

let x = parseInt(prompt('Cual es tu edad'))

console.log(x)

//para pasar de string a Entero parseInt() sino parseFloat()

if(x >= 18) {

    alert ('sos mayor de edad');
}   else {
    alert ('sos menor de edad');
}

//console.log(`Tu edad es ${x} `) Otra forma de concatenar variable con string

/*Bucles 

For (x cantidad de veces) / While / Do While (mientras se cumpla la condición)


*/

for(let i= 0; i <=10; i++) {
    
    console.log('Iteración N°:'+i)
    while (i%2 == 0) {
        alert (`El numero ${i} es par`)
        break          
    }
}





