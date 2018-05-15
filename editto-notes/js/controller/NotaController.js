class NotaController {
    constructor() {
        let $ = document.querySelector.bind(document);
        
        this._campoNota = $('#minhaNota');
        
        this._notaAtual = null; // Quer dizer que não é edição
        
        this._listaNotas = new ListaNotas();
        this._listNoteView = new ListNoteView($("#listagem-notas"));
        this._listNoteView.update(this._listaNotas);
    }
    
    salvar(event) {
        if (this._notaAtual) {
            //Edição
            this._notaAtual.conteudo = this._campoNota.value;
        } else {
            // Criação
            event.preventDefault();
            let nota = new Nota();
            nota.conteudo = this._campoNota.value;
            this._notaAtual = nota
            console.log(nota);
            this._listaNotas.adiciona(nota);
            this._atualizaLista();
            console.log(this._listaNotas.notas)
        }
        this._listNoteView.update(this._listaNotas);
    }
    
    novaNota() {
        this._campoNota.value = "";
        this._notaAtual = null;
    }
    
    _atualizaLista() {
        
    }
}