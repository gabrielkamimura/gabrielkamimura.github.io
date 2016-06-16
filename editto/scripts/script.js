$(document).ready(function() {
    var edicao = new eDitto("textExample");
    var documento = edicao.obterDocumento(),
        barraBotoes = edicao.obterBarraBotoes();



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

    var personalizacao = new eDittoButton(buttonGroupCustom, 'smile-o', "Elemento personalizado");
    personalizacao.getButtonDOM().onclick = function() {
      documento.inserirTexto(":)");
    };

    var carregamento = new eDittoButton(buttonGroupCustom, 'random', "Modelo externo");
    carregamento.getButtonDOM().onclick = function() {
      documento.carregar('modelos/testeExterno.html')
    };

    var tpl = new eDittoButton(buttonGroupCustom, 'random', "Carregamento de template");
    tpl.getButtonDOM().onclick = function() {
      var opcoes = [
        {
          variavel: 'titulo',
          valor: prompt("Insira um título")
        }
      ];
      documento.carregar('modelos/testeTemplate.html', opcoes);
    };

    var stgIns = new eDittoButton(buttonGroupCustom, 'comment', "Olá, meu amigo")
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
