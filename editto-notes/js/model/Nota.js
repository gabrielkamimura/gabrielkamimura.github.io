class Nota {
    contructor(id = null) {        
        this._id  = id;        
        Object.freeze(this);
        //@todo -> Salvar a nota no localStorage
    }
    
    get conteudo() {
        return this._conteudo;
    }
    
    set conteudo(rconteudo) {
        this._conteudo = rconteudo;
    }
    
    get id() {
        return this._id;
    }
    
    get conteudoResumido() {
        return this._conteudo;
    }
}