//Criar um laço para exibir se o número é mpar ou par

let numeros = 20

for(contador = 0; contador <= numeros; contador++)
{
    //mod % é o resto da divisão
    if(contador%2==0){
        console.log(contador+" é PAR")
    }else{
        console.log(contador+" é IMPAR")
    }
}
