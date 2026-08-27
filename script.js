var texto = "hola"
var numero = 180;
var boleano =false;
var lista = [ 1, 2, 3];
var objeto = { "curso" : "curso web"}
i= 0

function mifuncion(parametro){
    var texto;
    if(parametro > texto){
        texto = true
        for(let i=0 ; i<4;i++){
            console.log("impresion:"{i})
        }
            
    }else{
        texto = false 
    }
    return texto
}

console.log(mifuncion(7))