<script setup>
</script>

<template>
  <section class="container portfolio-container w-100 m-auto">
    <header class="d-flex flex-column banner justify-content-center py-4">
      <RouterLink class="btn btn-link back-button d-flex flex-row align-items-center" to="/"> <i class="fa-solid fa-arrow-left"></i> <div class="mx-1">Projetos</div> </RouterLink>
      <h1 class="display-1">
        Design System Multi-Marcas: Evino, Grand Cru e Víssimo
      </h1>
      <p>
        Mais Autonomia e Usabilidade para o Benefício Flex
      </p>
    </header>

    <section class="py-4">
      <h1>Protótipo</h1>
      <img style="border-radius: 16px;" class="w-100" src="/src/assets/images/projects/champagne-ds/color-planner.png" alt="Representação de exemplo do sistema de cores do Design System">
      <small>Exemplificação de parte do sistema de cores do Design System.</small>
    </section>
    
    <section class="py-4">
      <h1>Equipe e papel</h1>
      <p>
        Responsável em conjunto com outros designers por <b>manter e construir o Design System da empresa</b>, buscando por padrões usáveis pelos usuários e criando componentes que respeitem padrões de interação para os times de design e desenvolvimento.
      </p>
    </section>

    <section class="py-4">
      <h1>Sobre o Víssimo Group</h1>
      <div class="row">
          <div class="col-md-4 py-2">
            <div class="card h-100 card-results p-4 w-100">
              <div class="card-body">
                <div class="p-4 w-100 card-results__image-wrapper">
                    <img class="w-100" src="/src/assets/images/projects/general/logo-vissimo.png" alt="Víssimo">
                </div>
                <p class="card-text text-center"><b>Holding</b> que engloba as marcas <b>Evino</b> e <b>Grand Cru</b>, líderes no mercado de vinhos no Brasil.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 py-2">
            <div class="card h-100 card-results p-4 w-100">
              <div class="card-body">
                <div class="p-4 w-100 card-results__image-wrapper">
                    <img class="w-100" src="/src/assets/images/projects/general/logo-evino.svg" alt="Evino">
                </div>
                <p class="card-text text-center"><b>Maior e-commerce de vinhos</b> da América Latina, oferecendo excelente custo-benefício..</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 py-2">
            <div class="card h-100 card-results p-4 w-100">
              <div class="card-body">
                <div class="p-4 w-100 card-results__image-wrapper">
                    <img class="w-100" src="/src/assets/images/projects/general/logo-gc.svg" alt="Grand Cru">
                </div>
                <p class="card-text text-center">Especializada em <b>vinhos premium</b>, abrangendo lojas físicas, e-commerce, e clube de assinatura.</p>
              </div>
            </div>
          </div>
      </div>
      
      
    </section>
    <section class="py-4">
      <h1>Contextualização</h1>
      <p>Com a necessidade de unificar e padronizar a experiência digital das marcas Evino, Grand Cru e Víssimo, foi desenvolvido um Design System escalável que respeita a identidade e o posicionamento de cada marca. O projeto abrange não apenas a consistência visual e a experiência do usuário, mas também a eficiência no desenvolvimento, garantindo um design coeso, flexível e multiplataforma considerando padrões para web, iOS e Android.</p>
    </section>

     <section class="py-4">
      <h1>Desafios</h1>
      <ul>
          <li class="py-2">Criar um <b>design system unificado</b>, mas que <b>preserve a identidade</b> distinta de cada marca.</li>
          <li class="py-2">Adaptar componentes para <b>diferentes plataformas</b> (web, iOS e Android), respeitando guidelines como Material Design e Human Interface Guidelines.</li>
          <li class="py-2">Desenvolver um <b>sistema de ícones</b> próprio, alinhado às características e necessidades do mercado de vinhos.</li>
          <li class="py-2">Assegurar a <b>colaboração contínua entre design e desenvolvimento</b>, garantindo a implementação fiel dos componentes.</li>
      </ul>
      
    </section>
     <section class="py-4">
      <h1>Fundamentos do Design System</h1>
      <p>Para estruturar um sistema dinâmico e flexível, utilizamos variables, styles e tokens no Figma, permitindo ajustes de identidade visual para cada marca sem perder consistência.</p>
      <ul>
          <li class="py-2"><b>Cores:</b> Paleta flexível baseada em variables no Figma, adaptando-se para cada marca sem comprometer a harmonia visual.</li>
          <li class="py-2"><b>Tipografia:</b> Definição de fontes escaláveis, com estilos pré-configurados para hierarquia e acessibilidade.</li>
          <li class="py-2"><b>Espaçamentos & Grid:</b> Sistema modular ajustável para garantir fluidez entre plataformas.</li>
          <li class="py-2"><b>Modo Claro/Escuro:</b> Tokens de cor adaptáveis para cada contexto de uso.</li>
      </ul>
    </section>

    <section class="py-4">
      <h1>Componentização e Consistência Multi-Plataforma</h1>
      <p>O Design System foi construído para garantir consistência entre web, iOS e Android, considerando guidelines específicas de cada plataforma:</p>
      <ul>
          <li class="py-2"><b>Componentes de navegação</b> seguindo Material Design (Android) e HIG (iOS).</li>
          <li class="py-2"><b>Componentes adaptáveis</b> para diferentes resoluções de tela.</li>
          <li class="py-2"> <b>Estados interativos (hover, focus, disabled, pressed)</b> seguindo padrões de acessibilidade.</li>
          <li class="py-2"><b>Desenvolvimento de Plugins no Figma</b> para facilitar na adaptação entre plataformas e marcas.</li>
      </ul>
    </section>

    <section class="py-4">
      <h1>Ícones do Mercado de Vinhos</h1>
      <p>Um sistema próprio de ícones foi desenvolvido internamente para refletir os valores do mercado de vinhos, incluindo:</p>
      <ul>
          <li class="py-2"><b>Representações estilizadas de taças, garrafas e alimentos</b> com traços minimalistas e sofisticados.</li>
          <li class="py-2"><b>Iconografia adaptável</b>, garantindo legibilidade em diferentes tamanhos e resoluções.</li>
      </ul>
    </section>

    <section class="py-4">
        <h1>Resultados</h1>
        
        <div class="row">
          <div class="col-md-4 py-2">
            <div class="card h-100 card-results p-4 w-100">
              <div class="card-body">
                <p class="text-center"><b>Prototipação mais rápida</b></p>
                <i class="text-center w-100 p-2 fa-solid fa-swatchbook card-results__icon"></i>
                <p class="card-text text-center">Com a utilização de componentes e reutilização de padrões.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 py-2">
            <div class="card h-100 card-results p-4 w-100">
              <div class="card-body">
                <p class="text-center"><b>Adaptações mais rápidas</b></p>
                <i class="text-center w-100 p-2 fa-solid fa-wand-magic-sparkles card-results__icon"></i>
                <p class="card-text text-center">Redução no tempo de adaptação nos designs entre plataformas.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 py-2">
            <div class="card h-100 card-results p-4 w-100">
              <div class="card-body">
                <p class="text-center"><b>Desenvolvimento mais rápido</b></p>
                <i class="text-center w-100 p-2 fa-solid fa-code card-results__icon"></i>
                <p class="card-text text-center">Graças à reutilização de componentes padronizados.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-4 py-2">
            <div class="card h-100 card-results p-4 w-100">
              <div class="card-body">
                <p class="text-center"><b>Melhoria na acessibilidade</b></p>
                <i class="text-center w-100 p-2 fa-solid fa-universal-access card-results__icon"></i>
                <p class="card-text text-center">Com componentes otimizados para diferentes contextos de uso.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 py-2">
            <div class="card h-100 card-results p-4 w-100">
              <div class="card-body">
                <p class="text-center"><b>Facilidade de escalabilidade</b></p>
                <i class="text-center w-100 p-2 fa-solid fa-hand-holding-droplet card-results__icon"></i>
                <p class="card-text text-center">Permitindo expansão futura sem comprometer a coesão do sistema.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 py-2">
            <div class="card h-100 card-results p-4 w-100">
              <div class="card-body">
                <p class="text-center"><b>Mais <br /> consistência</b></p>
                <i class="text-center w-100 p-2 fa-solid fa-clone card-results__icon"></i>
                <p class="card-text text-center">Experiência consistente entre marcas e plataformas.</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
  
</style>
