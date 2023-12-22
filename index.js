
function rankAtualizado(vitorias, derrotas) {
    resultado = vitorias - derrotas; 
    
    switch(true) {
        case resultado <= 10:
            console.log("O Herói tem de saldo de " + resultado + " e está no nível de Ferro");
        break;
    
        case resultado >= 11 && resultado <= 20:
            console.log("O Herói tem de saldo de " + resultado + " e está no nível de Bronze");
        break;
    
        case resultado >= 21 && resultado <= 50:
            console.log("resultadotem de saldo de " + resultado + " e está no nível de Prata");
        break;
    
        case resultado >= 51 && resultado <= 80:
            console.log("O Herói tem de saldo de " + resultado + " e está no nível de Ouro");
        break;
    
        case resultado >= 81 && resultado <= 90:
            console.log("O Herói tem de saldo de " + resultado + " e está no nível de Diamante");
        break;
    
        case resultado >= 91 && resultado <= 100:
            console.log("O Herói tem de saldo de " + resultado + " e está no nível de Lendário");
        break;
    
        case resultado >= 1001:
            console.log("O Herói tem de saldo de " + resultado + " e está no nível de Imortal");
        break;
    }

  }
  
rankAtualizado(24,9);
  



