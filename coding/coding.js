const letrasNoPermitidas = "áéíóúÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

function contieneNoPermitidos(texto) {
    for (const char of texto) {
        if (letrasNoPermitidas.includes(char)) {
            return true;
        }
    }
    return false;
}

function encriptar() {
    const textoUsuario = document.getElementById("textoInput").value;
    
    if (contieneNoPermitidos(textoUsuario)) {
        swal("Texto no válido", "Por favor, ingrese solo letras minúsculas y sin acentos.", "error");
        return;
    }

    if (textoUsuario.trim() === "") {
        swal("Campo vacío", "Por favor, ingrese texto para encriptar.", "info");
        return;
    }

    let textencrip = textoUsuario
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("placeholder").style.display = "none";
    document.getElementById("output-content").style.display = "block";
    document.getElementById("texto-resultado").innerText = textencrip;
    document.getElementById("textoInput").value = "";
}

function desencriptar() {
    const textoUsuario = document.getElementById("textoInput").value;

    if (contieneNoPermitidos(textoUsuario)) {
        swal("Texto no válido", "Por favor, ingrese solo letras minúsculas y sin acentos.", "error");
        return;
    }

    if (textoUsuario.trim() === "") {
        swal("Campo vacío", "Por favor, ingrese texto para desencriptar.", "info");
        return;
    }
    
    let textdesencrip = textoUsuario
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("placeholder").style.display = "none";
    document.getElementById("output-content").style.display = "block";
    document.getElementById("texto-resultado").innerText = textdesencrip;
    document.getElementById("textoInput").value = "";
}

function copiar() {
    const textoResultado = document.getElementById("texto-resultado").innerText;
    navigator.clipboard.writeText(textoResultado).then(() => {
        swal("¡Copiado!", "El texto ha sido copiado al portapapeles.", "success");
        
        document.getElementById("placeholder").style.display = "block";
        document.getElementById("output-content").style.display = "none";

    }, () => {
        swal("Error", "No se pudo copiar el texto.", "error");
    });
}