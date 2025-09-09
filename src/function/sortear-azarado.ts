import Pessoa from "../model/pessoa";

export function sortearAzarado(pessoas: Pessoa[]): Pessoa{

    let lista = [...pessoas]

    for(let i=0; i < pessoas.length; i++){
        lista = todosMenosUm(lista)
    }

    return lista[0]
}

function todosMenosUm(pessoas: Pessoa[]): Pessoa[]{
    if(pessoas.length === 1) return pessoas

    const desclassificado = Math.floor(Math.random() * pessoas.length)
    pessoas.splice(desclassificado, 1)

    return pessoas
}