import carregarPessoas from "./function/carregar-pessoas.ts";
import { sortearAzarado } from "./function/sortear-azarado.ts";
import terminal from './ui/terminal.ts'

(async function(){
    const pessoas = carregarPessoas('./src/data/dados.csv')
    const vencedor = await sortearAzarado(pessoas)
    
    terminal.clear()
    terminal.white('\nO').brightRed(' AZARADO')
    terminal.bold.brightGreen(' Mais Sortudo').white(' é\n\n')
    terminal.brightYellow(vencedor.toString())
    terminal('\n\n')
    terminal('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉')
    console.log()
})()



