import terminal from "./terminal";

export default class Progresso {
    private barra: any

    constructor(private qtdeItems: number){
        this.barra = terminal.progressBar({
            width: 200,
            title: "Progresso",
            eta: true,
            percent: true,
            syncMode: true,
            items: this.qtdeItems
        })
        this.barra.startItem(0)
        this.barra.itemDone(0)
    }
    startItem(item:number){
        this.barra.startItem(item)
    }

    itemDone(item:number){
        this.barra.itemDone(item)
    }
}