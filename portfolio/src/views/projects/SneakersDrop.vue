<script setup>
</script>

<template>
  <section class="container portfolio-container w-100 m-auto">
    <header class="d-flex flex-column banner justify-content-center py-4">
      <RouterLink class="btn btn-link back-button d-flex flex-row align-items-center" to="/"> <i class="fa-solid fa-arrow-left"></i> <div class="mx-1">Projetos</div> </RouterLink>
      <h1 class="display-1">
        Mercado de sneakers exclusivos
      </h1>
      <p>
        Experiência em lançamentos limitados e exclusivos
      </p>
    </header>

    <section class="py-4">
        <h1>Apresentação completa</h1>
      <iframe class="w-100" src="https://www.slideshare.net/slideshow/embed_code/key/zUZIxsw2jjpjBS?hostedIn=slideshare&page=upload" height="600" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
    </section>
    
    <section class="py-4">
      <h1>Equipe e papel</h1>
      <p>
        Responsável pela <b>pesquisa com usuários e desenho das interfaces</b> no contexto de projeto de conclusão de curso na <b>especialização em Design Digital e Novas Mídias</b> no Centro Universitário Belas Artes de São Paulo.
      </p>
    </section>

    <section class="py-4">
      <h1>Contextualização</h1>
      <p>Com o crescimento da cultura sneaker, <b>lançamentos exclusivos atraem um grande volume de compradores</b> para sites e aplicativos. No entanto, <b>problemas de usabilidade</b> nesses ambientes digitais <b>podem gerar frustrações</b>, dificultando a experiência de compra.</p>
    </section>

     <section class="py-4">
      <h1>Problema</h1>
      <p>
          A análise do site Nike SNKRS revelou diversos <b>problemas de usabilidade</b>, como demora no carregamento, falhas na apresentação de disponibilidade de produtos e mensagens de erro pouco intuitivas. Esses fatores comprometem a experiência dos usuários e geram frustração durante a compra de sneakers exclusivos.
      </p>
      
    </section>
     <section class="py-4">
      <h1>Processo de Design (metodologia)</h1>
      <ol>
        <li class="py-2"><b>Pesquisa bibliográfica:</b> Exploração de conceitos de UX, usabilidade e comportamento do consumidor.</li>
        <li class="py-2"><b>Análise heurística:</b> Avaliação do site Nike SNKRS com base nas Heurísticas de Nielsen.</li>
        <li class="py-2"><b>Prototipação:</b> Desenvolvimento de um modelo de interface otimizado.</li>
        <li class="py-2"><b>Testes com usuários:</b> Questionários e avaliações comparando a experiência no Nike SNKRS e no protótipo.</li>
      </ol>
    </section>
    <section class="py-4">
        <h1>Solução</h1>
        <p>O protótipo desenvolvido seguiu boas práticas de design de interface, priorizando:</p>
        <ul>
            <li class="py-2"><b>Melhor visibilidade do status do sistema</b> (feedbacks claros e carregamento otimizado).</li>
            <li class="py-2"><b>Correção de erros e recuperação eficiente</b>, reduzindo a frustração do usuário.</li>
            <li class="py-2"><b>Maior transparência na disponibilidade de produtos</b>, garantindo que os clientes saibam o que podem comprar.</li>
        </ul>
    </section>
    <section class="py-4">
        <h1>Resultados</h1>
        <div class="row">
          <div class="col-md-6 py-2">
            <div class="card h-100 card-results p-4 w-100">
              <div class="card-body">
                <p class="text-center"><b>+ Percepções</b></p>
                <i class="text-center w-100 p-2 fa-solid fa-star card-results__icon"></i>
                <div class="d-flex justify-content-center align-items-center">
                  <p class="h1 p-2 text-decoration-line-through text-danger">1,5</p>
                  <i class="fa-solid fa-arrow-right"></i>
                  <p class="h1 p-2 text-success">4,4</p>
                </div>
                <p class="card-text text-center">Em um ranking de 0 a 5, uma melhoria considerável</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 py-2">
            <div class="card h-100 card-results p-4 w-100">
              <div class="card-body">
                <p class="text-center"><b>Menos erros</b></p>
                <i class="text-center w-100 p-2 fa-solid fa-face-smile card-results__icon"></i>
                <p class="card-text text-center">Houve uma redução significativa na ocorrência de erros nas interações com o protótipo.</p>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section class="py-4">
        <h1>Veja o resultado</h1>
        <p>
          Confira a pesquisa completa no link.
        </p>
        <a class="btn btn-outline-primary me-2" href="https://drive.google.com/file/d/1vKdr4AjyWi4S5yssQx_2yMeLO7kus6e-/view?usp=sharing" target="blank"><i class="fa-solid fa-link"></i> Visualizar documento</a>
    </section>
  </section>
</template>

<style lang="scss" scoped>
  
</style>
