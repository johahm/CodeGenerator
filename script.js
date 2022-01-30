
function encriptar(){

    var texto = document.getElementById("mensaje").value;
    
    texto = normalizar(texto);
    
    texto = texto.replaceAll('e', 'enter');
    texto = texto.replaceAll('i', 'imes');
    texto = texto.replaceAll('a', 'ai');
    texto = texto.replaceAll('o', 'ober');
    texto = texto.replaceAll('u', 'ufat');
    
    document.getElementById("resultado").value = texto;
    alert("¡Codigo Generado!");
    
    }
    
        alert("Codigo Generado!", "Generador dice...", Alert.ok);
        
    
    
    function desencriptar(){
    
    let texto = document.getElementById("mensaje").value;
    texto = normalizar(texto);
    texto = texto.replaceAll('enter', 'e');
    texto = texto.replaceAll('imes', 'i');
    texto = texto.replaceAll('ai', 'a');
    texto = texto.replaceAll('ober', 'o');
    texto = texto.replaceAll('ufat', 'u');
    
    document.getElementById("resultado").value = texto;
    
    }
    
    
    function pegar(){
    
    document.getElementById("mensaje").value = document.getElementById("resultado").value;
    
    }
    
    function copiar(){
    
     let contenido = document.getElementById('resultado');
     contenido.select();
     document.execCommand('copy');
     document.getElementById('mensaje').focus();
    
    }
    
    function normalizar(texto) {
    return texto.normalize('NFD').replace(/([aeiou])[\u0300-\u0308]/gi,"$1").normalize().toLowerCase();
    }