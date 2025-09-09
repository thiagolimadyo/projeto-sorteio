export default class Pessoa {
    constructor(readonly nome: string, readonly email: string){}

    get emailMascadaro(){
        const regex = /(.{1,3})(.*)(@.*)/gm
        return this.email.replace(regex, (_, g1, g2, g3) =>{
            return g1 + "***" + g3
        })
    }

    toString(): string {
        return `${this.nome} <${this.emailMascadaro}>`
    }
}