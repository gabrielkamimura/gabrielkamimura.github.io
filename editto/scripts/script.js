$(document).ready(function() {
    var edicao = new eDitto("textExample");

    var editorInsercao = new eDitto("eDittoTextExample", {disableDefaultComponents: true}),
        documento1 = editorInsercao.obterDocumento();
    var personalizacao = new eDittoButton(new eDittoButtonGroup(editorInsercao.obterBarraBotoes()), 'smile-o', "Elemento personalizado");
    personalizacao.getButtonDOM().onclick = function() {
      documento1.inserirTexto(":)");
    };

    var editorArquivo = new eDitto("eDittoFileLoadExample", {disableDefaultComponents: true}),
        documento2 = editorInsercao.obterDocumento();
    var carregamento = new eDittoButton(new eDittoButtonGroup(editorArquivo.obterBarraBotoes()), 'random', "Modelo externo");
    carregamento.getButtonDOM().onclick = function() {
      documento2.carregar('/editto/modelos/testeExterno.html');
    };

    var editorArqVars = new eDitto("eDittoFileVarsExample", {disableDefaultComponents: true}),
        documento3 = editorInsercao.obterDocumento();
    var tpl = new eDittoButton(new eDittoButtonGroup(editorArqVars.obterBarraBotoes()), 'random', "Carregamento de template");
    tpl.getButtonDOM().onclick = function() {
      var opcoes = [
        {
          variavel: 'titulo',
          valor: prompt("Insira um título")
        }
      ];
      documento3.carregar('/editto/modelos/testeTemplate.html', opcoes);
    };

    var documento = edicao.obterDocumento(),
        barraBotoes = edicao.obterBarraBotoes();
    // Elementos personalizados
    // var buttonGroupCustom = new eDittoButtonGroup(barraBotoes);
    //
    //
    // var btnImagem = new eDittoButton(buttonGroupCustom, "picture-o", "Imagem");
    // btnImagem.getButtonDOM().onclick = function() {
    //   var url = prompt("Insira a url da imagem");
    //   if (url) {
    //       var opcoes = [
    //           {
    //               variavel: 'imagem.src',
    //               valor: url
    //           }
    //       ];
    //       documento.carregar('modelos/imageInsert.html', opcoes);
    //   }
    // };
    //
    // var stgIns = new eDittoButton(buttonGroupCustom, 'comment', "Olá, meu amigo");
    // stgIns.getButtonDOM().onclick = function() {
    //   var opcoes = [
    //       {
    //           variavel: 'nome',
    //           valor: prompt("Insira o seu nome")
    //       }
    //   ];
    //   documento.inserirComponente("<p>Olá, {{ nome }}!!</p>", opcoes);
    // }
});
