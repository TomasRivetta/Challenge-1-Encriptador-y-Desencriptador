let letrasNoPermitidas = "áéíóúABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"

function encriptar(){
    let textoUsuario = document.getElementById("textoInput").value
    let textencrip = ""
    seguirEncriptando = true


    for(i = 0 ; i < letrasNoPermitidas.length; i ++){
        for(j = 0; j < textoUsuario.length; j++)
        {
            if(letrasNoPermitidas[i] == textoUsuario[j])
            {
                swal("RECARGUE LA PAGINA, INGRESO LETRAS O NUMEROS INCORRECTAS","","error")
                seguirEncriptando = false
                break
            }
        }
    }

    if(seguirEncriptando == true)
    {
        for(i = 0; i < textoUsuario.length;i++){
            if(textoUsuario[i]== "a"){
                textencrip += "ai"
            }
            else if(textoUsuario[i]== "e"){
                textencrip += "enter"
            }
            
            else if(textoUsuario[i]== "i"){
                textencrip += "imes"
            }
            
            else if(textoUsuario[i]== "o"){
                textencrip += "ober"
            }
            else if(textoUsuario[i]== "u"){
                textencrip += "ufat"
            }
            else{
                textencrip += textoUsuario[i]
            }
        }
        document.getElementById("resultado").innerHTML = textencrip;
    
        document.getElementById("textoInput").value = ""
    }
    else
    {
        swal("Recargue la pagina porfavor, INGRESO MAYUSCULAS O NUMEROS","","error")
    }

    
}

function desencriptar(){
    let textoUsuario = document.getElementById("textoInput").value
    let textdesencrip = ""
    let seguirEncriptando = true

    for(i = 0 ; i < letrasNoPermitidas.length; i ++){
        for(j = 0; j < textoUsuario.length; j++)
        {
            if(letrasNoPermitidas[i] == textoUsuario[j])
            {
                swal("RECARGUE LA PAGINA, INGRESO LETRAS O NUMEROS INCORRECTAS","","error")
                seguirEncriptando = false
                break
            }
        }
    }

    if(seguirEncriptando == true)
    {
        for(i = 0; i < textoUsuario.length;i++){
            if(textoUsuario[i]== "a"){
                textdesencrip += "a";
                i++;
            }
            else if(textoUsuario[i]== "e"){
                textdesencrip += "e"
                i = i + 4;
            }
            
            else if(textoUsuario[i]== "i"){
                textdesencrip += "i"
                i = i + 3;
            }
            
            else if(textoUsuario[i]== "o"){
                textdesencrip += "o"
                i = i + 3;
            }
            else if(textoUsuario[i]== "u"){
                textdesencrip += "u"
                i = i + 3;
            }
            else{
                textdesencrip += textoUsuario[i]
            }
        }
    
        document.getElementById("resultado").innerHTML = textdesencrip;
    
        document.getElementById("textoInput").value = ""
    }
    else
    {
        swal("Recargue la pagina porfavor","","error")
    }

}


function copiar(){

    swal("MENSAJE COPIADO","","success")
    var aux = document.createElement("input");
    aux.setAttribute("value", document.querySelector(".mensajeRemplazar").innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);

    document.getElementById("resultado").innerHTML = "Ingresa el texto que desees encriptar o desencriptar."

}