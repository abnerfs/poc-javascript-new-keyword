
//Nossa função
function Person(saying)
{
    this.say = saying;
    
    this.talk = function(){
        console.log(this.say);
    }
    
    //Essa função poderia retornar alguma coisa, se retornasse o retorno de new seria o objeto,
    //em uma situação normal não há retorno na função e o objeto criado é retornado.
//    return{
//        dumbObject: 'Hello'
//    }
}


//Nossa implementação de new para entender como new funciona.
function spawn(constructor)
{
    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    //Na variável arguments estão os argumentos que foram passados para a função.
    //Aplicaremos todos os argumentos menos o primeiro (que é a função) ao construtor da função
    
    //Para pegar 
    //A variável arguments não é um array, então não poderiamos usar arguments.slice.
    //Para usar o slice em arguments vamos aplicar a função slice do objeto Array diretamente
    //em arguments.
    var argsArray = Array.prototype.slice.apply(arguments); //Agora arguments tem a função slice

    //Aqui usamos o slice para pegar todos os argumentos em arguments menos o primeiro e aplicar na função recebida
    //no primeiro parâmetro.

    //Se a função retornar alguma coisa,
    //(o que é algo estranho mas que pode acontecer em alguma situação específica), esse retorno
    //será retornado por new, caso contrário o objeto criado será retornado (comportamento normal) 
    return constructor.apply(obj, argsArray.slice(1)) || obj;
}

// Tem o mesmo comportamento de new Person('Semicolons');
var crockford = spawn(Person, 'Semicolons');

//Objeto criado com nossa implementação do new.
console.log("hello", crockford);

//Chamando uma função do objeto para ver que funcionou.
crockford.talk();
