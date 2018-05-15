class ListaNotas {
    
    constructor() {
        this._notas = [];
    }
    
    adiciona(nota) {
        this._notas.push(nota);
    }
    
    get notas() {
        return this._notas;
    }
}