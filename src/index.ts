import carregarPessoas from "./function/carregar-pessoas.ts";
import { sortearAzarado } from "./function/sortear-azarado.ts";


const pessoas = carregarPessoas('./src/data/dados.csv')

const vencedor = sortearAzarado(pessoas)

console.log('VENCEDOR:', vencedor.toString())

