import Pessoa from "../model/pessoa";
import Progresso from "../ui/progresso";

export async function sortearAzarado(pessoas: Pessoa[]): Promise<Pessoa>{

    let lista = [...pessoas]
    const barraDeProgresso = new Progresso(pessoas.length)

    for(let i=1; i <= pessoas.length; i++){
        lista = todosMenosUm(lista)
        await temporizador(i, barraDeProgresso)
    }

    return lista[0]
}

function todosMenosUm(pessoas: Pessoa[]): Pessoa[]{
    if(pessoas.length === 1) return pessoas

    const desclassificado = Math.floor(Math.random() * pessoas.length)
    pessoas.splice(desclassificado, 1)

    return pessoas
}

async function temporizador(item:number, barraDeProgresso:Progresso): Promise<void>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            barraDeProgresso.startItem(item)
            barraDeProgresso.itemDone(item)
            resolve()
        },20)
    })
}