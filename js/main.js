// SOLUCIÓN CON ARRAY

/*  let nombre = ("Abraham");
nombre = nombre.toUpperCase ();
// console.log(repeat);
let letra = [];
for (let i = 0; i < nombre.length; i++){
    if (letra.includes(nombre[i])){
        console.log("Esta letra se repite:  " + nombre[i]); //si la variable nombrei incluye algo del arreglo "r" que ya esta repetido se imprime el duplicado
    }else{
        letra.push(nombre[i]) //elimina los repetidos
    }
}  

 */

// Solucion con CADENAS (STRINGS)
/*  let Nombre = "Abraham";
Nombre = Nombre.toUpperCase();
let letra = "";
let contFinal=0;
for (let index = -1; index < Nombre.length; index++) {
    console.log(Nombre.charAt(index));
    let contTemp=1;
    for (let cont = index+1; cont <Nombre.length; cont++){
        if (Nombre.charAt(index) == Nombre.charAt(cont))
            contTemp++
    }
    if (contTemp>contFinal){
        contFinal=contTemp;
        letra = Nombre.charAt(index);
    }
    
} 
console.log(letra, contFinal);  */
/* function reves(str){
    let tmpStr="";
    for (let indice = str.length-1; indice >=0; indice--) {
    tmpStr += str.charat (indice) ;
    }//for indice
    return tmpStr;
    }//reves


    function esPalindromo(str){

    let res=false;
        str =str.toLowerCase () ;
        str =str.replaceAll(" ", "");
        if (reves (str)==str) {
        res = true;
            }
    }
return res; */
//esPalindromo

//Aquí se escribiran los ejercicios con Strings
let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    //https://emailregex.com/
    let emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

    let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1"); //email
    let exampleFormControlInput2 = document.getElementById("exampleFormControlInput2");  //RFC
    let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");
    let alertError = document.getElementById("alertError");
    exampleFormControlTextarea1.value = exampleFormControlTextarea1.value.trim();
    alertError.style.display="none";
    alertError.innerHTML="";
    if (exampleFormControlTextarea1.value.trim().replaceAll("  " , "").length < 20){
        alertError.innerHTML = "El mensaje debe contener 20 caracteres o más.";
        alertError.style.display="block";
        exampleFormControlTextarea1.focus();
        exampleFormControlTextarea1.select();
    }//if

    if (exampleFormControlInput1.value.match(emailRegex) == null) {
        alertError.style.display="block";
        alertError.innerHTML += "<br/>El correo electrónico no es válido.";
    }//
    let RFCRegex = /^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$/;   //en la pag de expresiones regulares enseñan a poner condiciones para los campos de texto
    if (exampleFormControlInput2.value.match(RFCRegex) == null) {
        alertError.style.display="block";
        alertError.innerHTML += "<br/>El RFC no es válido.";
    }//
});
