<script setup>
import ProjectCard from '../components/ProjectCard.vue'
</script>

<template>
  <section class="container portfolio-container w-100 m-auto">
    <header class="d-flex flex-column banner justify-content-center">
      <h1 class="display-1">Olá, sou Gabriel Kamimura</h1>
      <p>UX/UI Designer (Product Designer) especializado em criar soluções inovadoras e centradas no usuário, unindo tecnologia, usabilidade e design para impactar negócios e melhorar a vida das pessoas.</p>
      <RouterLink class="d-flex flex-row about-link align-items-center" to="/about"> <div class="me-1">Sobre mim</div> <i class="fa-solid fa-chevron-right"></i></RouterLink>
    </header>

    <section class="pb-5">
      <hr />
      <h1>Projetos</h1>
      
      <div class="row mb-md-5">
        <div class="col-md-6">
          <ProjectCard 
            title="Redesenho do App Grand Cru"
            description="Melhoria de usabilidade e experiência de compra"
            image="/src/assets/images/covers/app-gc-cover.png"
            to="/projects/grand-cru-app"
            role="Product Design, UI Design"
          />
        </div>
        <div class="col-md-6">
          <ProjectCard 
            title="Mais Personalização"
            description="Autonomia e usabilidade para assinantes de vinhos"
            image="/src/assets/images/covers/flex-cover.png"
            to="/projects/flex-confraria"
            role="UX Research, Product Design, UI Design"
          />
        </div>
      </div>

      <div class="row mt-md-5">
        <div class="col-md-6">
          <ProjectCard 
            title="Mercado de Sneakers Exclusivos"
            description="Experiência em lançamentos limitados e exclusivos"
            image="/src/assets/images/covers/sneakers-cover.png"
            to="/projects/sneaker-drop"
            role="UX research, UI, Design"
          />
        </div>
        <div class="col-md-6">
          <ProjectCard 
            title="Design System Multi-Marcas"
            description="Evino, Grand Cru e Víssimo. Android, iOS e web"
            image="/src/assets/images/covers/ds-cover.png"
            to="/projects/champagne-ds"
            role="Product Design, UI Design"
          />
        </div>
      </div>
      
    </section>
  </section>
</template>

<style lang="scss" scoped>
  @import '../assets/tokens';
  
  .banner {
    padding-top: 96px;
    padding-bottom: 96px;
    
    .about-link {
      text-decoration: none;
      color: $primary-500;
    }
  }

  
</style>
