class ListNoteView extends View {
    
    constructor(elemento) {
        super(elemento);
    }
    
    template(model) {
        console.log(model.notas);
        console.log("Entrou aqui")
        if (model.notas.length) {
            return `
                ${model.notas.map(n => 
                    `<div class="card note-card">
                        <div class="card-body">
                          ${n.conteudo}
                        </div>
                      </div>`
                )}
            `;
        } 
        return `<section class="alert alert-warning" role="alert">
                    <h1>Não há rotas</h1>
                    <p>As notas criadas irão</p>
                </section>`;
    }
}
