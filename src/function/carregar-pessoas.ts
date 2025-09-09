import fs from 'fs'
import Pessoa from '../model/pessoa.ts'
export default function carregarPessoas(arquivo: string): Pessoa[] {
    // const pessoas: Pessoa[] = []
    const conteudo = fs.readFileSync(arquivo, 'utf-8')
    const linhas = conteudo.split("\n")

    const pessoas: Pessoa[] = linhas
        .filter(linha => linha.trim().length > 0)
        .map(linha => {
            const [nome, email] = linha.split(";")
            return new Pessoa(nome, email)
    })
    // const linhas = conteudo.split('\n').filter(l => l.length > 0)

    // linhas.forEach(linha => {
    //     const [nome, email] = linha.split(';')
    //     pessoas.push(new Pessoa(nome, email))
    // })
    return pessoas
}