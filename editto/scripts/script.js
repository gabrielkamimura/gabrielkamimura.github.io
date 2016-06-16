$(document).ready(function() {
    var edicao = new eDitto("textExample");
    var documento = edicao.obterDocumento(),
        barraBotoes = edicao.obterBarraBotoes();

    var editorInsercao = new eDitto("eDittoTextExample", {disableDefaultComponents: true});
    var personalizacao = new eDittoButton(new eDittoButtonGroup(editorInsercao.obterBarraBotoes()), 'smile-o', "Elemento personalizado");
    personalizacao.getButtonDOM().onclick = function() {
      editorInsercao.obterDocumento().inserirTexto(":)");
    };

    var editorArquivo = new eDitto("eDittoFileLoadExample", {disableDefaultComponents: true});
    var carregamento = new eDittoButton(new eDittoButtonGroup(editorArquivo.obterBarraBotoes()), 'random', "Modelo externo");
    carregamento.getButtonDOM().onclick = function() {
      editorArquivo.obterDocumento().carregar('/editto/modelos/testeExterno.html');
    };


    var editorArqVars = new eDitto("eDittoFileVarsExample", {disableDefaultComponents: true});
    var tpl = new eDittoButton(new eDittoButtonGroup(editorArqVars.obterBarraBotoes()), 'random', "Carregamento de template");
    tpl.getButtonDOM().onclick = function() {
      var opcoes = [
        {
          variavel: 'titulo',
          valor: prompt("Insira um título")
        }
      ];
      editorArqVars.obterDocumento().carregar('/editto/modelos/testeTemplate.html', opcoes);
    };

    // Elementos personalizados
    var buttonGroupCustom = new eDittoButtonGroup(barraBotoes);


    var btnImagem = new eDittoButton(buttonGroupCustom, "picture-o", "Imagem");
    btnImagem.getButtonDOM().onclick = function() {
      var url = prompt("Insira a url da imagem");
      if (url) {
          var opcoes = [
              {
                  variavel: 'imagem.src',
                  valor: url
              }
          ];
          documento.carregar('modelos/imageInsert.html', opcoes);
      }
    };

    var stgIns = new eDittoButton(buttonGroupCustom, 'comment', "Olá, meu amigo");
    stgIns.getButtonDOM().onclick = function() {
      var opcoes = [
          {
              variavel: 'nome',
              valor: prompt("Insira o seu nome")
          }
      ];
      documento.inserirComponente("<p>Olá, {{ nome }}!!</p>", opcoes);
    }
});
