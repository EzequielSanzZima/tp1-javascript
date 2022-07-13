
let contrasenaG = 'a';
let continuar = false;

function redondear(valor){
    return Math.round(valor)
}

for (i=0; i>=0; i--){
    let usuarioPass = prompt('Ingresa la contrasena del instituto para acceder, te quedan '+ (i+1) + ' intentos.')
    if(contrasenaG === usuarioPass){
        alert("Ingresaste al sistema");
        ingresar = true;
        break;
    }else {
        alert("Te equivocaste muchas veces, te quedan "+ i +" intentos.")
    }
} 

if(ingresar){
    let nombreAlumno = prompt('Ingrese nombre y apellido del Alumno');
    
    const notasTrabajos = function (a,b,c) { return a+b+c};

    let notasTrabajosP1 = parseInt(prompt('Ingrese la nota del primer trabajo'));
    let notasTrabajosP2 = parseInt(prompt('Ingrese la nota del segundo trabajo'));
    let notaTrabajoFinal = parseInt(prompt('Ingrese la nota del trabajo final'));

    let notasSumadas = notasTrabajos(notasTrabajosP1,notasTrabajosP2,notaTrabajoFinal)

    let resultado = notasSumadas/3
    alert(notasSumadas);
    alert(resultado);


    if (resultado>=1 && resultado<=6){
        alert('Desaprobo :(')
    }else if(resultado>=7 && resultado<=9){
        alert('Esta aprobado :)')
    }else if (resultado===10){
        alert('Esta aprobadisimo!!!! :D')
    }else{
        alert('ERROR!!!')
    }

}

//Arreglar texto





/* let menu = parseInt(prompt('A continuacion ingrese: \n-1 para vender.\n-2 para comprar.'));
while(menu != 'ESC'){
    switch(menu){
        case "1":
            alert('Vender')
            break;
        case "2":
            alert('comprar')
            break;
    }
    menu = parseInt(prompt('A continuacion ingrese: \n-1 para vender.\n-2 para comprar.'));
} */


