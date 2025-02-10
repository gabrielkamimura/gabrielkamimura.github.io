<script setup>
</script>

<template>
  <section class="container portfolio-container w-100 m-auto">
    <header class="d-flex flex-column banner justify-content-center py-4">
      <RouterLink class="btn btn-link back-button d-flex flex-row align-items-center" to="/"> <i class="fa-solid fa-arrow-left"></i> <div class="mx-1">Projetos</div> </RouterLink>
      <h1 class="display-1">
        Olá, sou Gabriel Kamimura
      </h1>
      <section>
        <a class="btn btn-outline-primary me-2" href="https://www.linkedin.com/in/gabrielk-yano/" target="blank"><i class="fa-brands fa-linkedin"></i> Linkedin</a>
        <a class="btn btn-outline-primary me-2" href="https://www.behance.net/gabrielkamimura" target="blank"><i class="fa-brands fa-behance"></i> Behance</a>
      </section>

    </header>
    <section class="row">
      <section class="col-md-8">
        <p>
          Graduado em <b>Análise e Desenvolvimento de Sistemas</b>, iniciei minha carreira como <b>desenvolvedor front-end, apaixonado pela criação de interfaces</b> funcionais em sistemas. Com a experiência trabalhando em uma startup, onde todos precisavam exercer diversos papeis, <b>fui apresentado e me apaixonei pelo mundo do design de experiência do usuário (UX)</b>. Foi nessa dinâmica de resolver problemas e criar soluções que entendi o poder do design centrado no ser humano, algo que fui explorando e me levou a fazer a minha <b>pós-graduação em Design Digital e Novas Mídias no Centro Universitário Belas Artes de São Paulo</b>.
        </p>
        <p>
          Fora do trabalho, encontro inspiração em várias formas de expressão e movimento. <b>Gosto de transformar ideias em histórias, criando quadrinhos e escrevendo textos</b> que capturam pequenos detalhes da vida, parte disso vocês podem encontrar publicados por aí, ou até licenciados em alguns livros didáticos. Além disso, sou praticante e apaixonado por <b> como forma de me manter ativo</b>. Também amo <b>viajar e descobrir sobre diferentes culturas e pessoas</b>.
        </p>
        <p> 
          Minha abordagem em UX é fundamentada em uma <b>mistura de empatia e estratégia</b>. Acredito que o <b>design deve ser acessível, intuitivo e, acima de tudo, resolver problemas reais das pessoas</b>. Como um profissional com habilidades tanto em design quanto em front-end, me esforço para criar soluções que não apenas encantam visualmente, mas que também são viáveis de implementar, garantindo um fluxo de trabalho coeso entre as equipes de design e desenvolvimento.
        </p>
        <p>
          Hoje, meu trabalho é guiado por uma <b>paixão em aprender e compartilhar conhecimento</b>. Seja através de workshops, mentorias ou colaboração em equipe, acredito que o design é uma ferramenta poderosa para transformar experiências cotidianas em algo memorável. Meu objetivo é sempre buscar o equilíbrio entre estética, funcionalidade e impacto, projetando com propósito e significado.
        </p>
      </section>
      <div class="col-md-4 h-100 portfolio-about__image d-none d-md-flex flex-fill vh-100">
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
  .portfolio-about__image {
    border-radius: 15px;
    background: no-repeat left center;
    height: 100%;
    background-image: url('../assets/images/bg-about.png');
  }
</style>
