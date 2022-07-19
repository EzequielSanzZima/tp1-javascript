
let contrasenaG = 'entrar';
let continuar = false;



for (i=0; i>=0; i--){
    let usuarioPass = prompt('Ingresa la contrasena del instituto para acceder, te quedan '+ (i+1) + ' intentos.')
    if(contrasenaG === usuarioPass){
        alert("Ingresaste al sistema");
        continuar = true;
        break;
    }else {
        alert("Te equivocaste muchas veces, te quedan "+ i +" intentos.")
        continuar = false;
    }
} 

if(continuar){
    let nombreAlumno = prompt('Ingrese nombre y apellido del Alumno');
    
    const notasTrabajos = function (a,b,c) { return a+b+c};
    const notaFinal = function (a,b) { return a/b}
    const totalNotas = 3


    alert('A continuacion introdusca las 3 notas del alumno: '+ nombreAlumno)
    let notasTrabajosP1 = parseInt(prompt('Ingrese la nota del primer trabajo'));
    let notasTrabajosP2 = parseInt(prompt('Ingrese la nota del segundo trabajo'));
    let notaTrabajoFinal = parseInt(prompt('Ingrese la nota del trabajo final'));

    alert('La nota del alumno: '+ nombreAlumno + '\nNota Trabajo 1: '+notasTrabajosP1+ '\nNota trabajo 2: '+notasTrabajosP2+'\nNota trabajo Final: '+ notaTrabajoFinal)

    let notasSumadas = notasTrabajos(notasTrabajosP1,notasTrabajosP2,notaTrabajoFinal)
    let resultado = notaFinal(notasSumadas,totalNotas)

    if (resultado>=1 && resultado<=6){
        alert('Desaprobo :(\nEl alumno: '+nombreAlumno+ 'desaprobo con trimestre con: '+ Math.round(resultado))
    }else if(resultado>=7 && resultado<=9){
        alert('Esta aprobado :)\nEl alumno: '+ nombreAlumno + ' Esta aprobado con: '+Math.round(resultado))
    }else if (resultado===10){
        alert('Esta aprobadisimo!!!! :D\nNo hace falta decirlo el alumno: '+nombreAlumno+'Se saco un '+Math.round(resultado)+'!!!!')
    }else{
        alert('ERROR!!!')
    }

}else{
    alert('La cuenta se bloqueo, por muchos intentos.')
}


