<script setup>
import { reactive, ref } from "vue";

  const isOpen = ref(false);

  const openMenu = () => {
    isOpen.value = true;
  };

  const closeMenu = () => {
    isOpen.value = false;
  };
</script>

<template>
<div>
  
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/"><img src="../assets/logo.svg" alt="GK logo"></RouterLink>
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item navbar-open-menu">
            <a class="strong" href="#" @click="openMenu()">
              <i class="fa-solid fa-grip navbar-icon"></i>
              Menu
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <nav class="full-navbar flex-column p-4" :class="{ isOpen: isOpen }">
    <div class="navbar__container full-navbar__header d-flex align-items-center w-100 justify-content-end">
      <a class="navbar__close" href="#" @click="closeMenu()"><i class="fa-solid fa-xmark"></i></a>
    </div>
    <div class="d-flex h-100 w-100 flex-column flex-md-row navbar__container justify-content-around align-items-center">
      <div class="navbar__item">
        <RouterLink class="nav-link" to="/" @click="closeMenu()">
          <i class="navbar__item__icon fa-solid fa-compass-drafting"></i>
          <span class="h1">Portfólio</span>
        </RouterLink>
      </div>
      <div class="navbar__item">
        <RouterLink class="nav-link" to="/about" @click="closeMenu()">
          <i class="navbar__item__icon fa-solid fa-address-card"></i>
          <span class="h1">Sobre mim</span>
        </RouterLink>
      </div>
    </div>
  </nav>

</div>
</template>

<style scoped lang="scss">

  @import '../assets/tokens';


  .navbar {
    background-color: $background-400;
    .container-fluid {
      margin: 0 auto;
      max-width: $max-width;
      font-weight: 700;
    }

    .navbar-open-menu {
      color: $neutral-700;
      transition: transform .3s ease;
      a {
        color: $neutral-700;
        text-decoration: none;
      }

      &:hover {
        transform: scale(1.1);
      }
    }

  }


  .full-navbar {
    display: none;

    width: 100vw;
    height: 100vh;
    position: fixed;
    overflow: hidden;
    background-color: $background-400;
    z-index: 1031;
    left: 0;
    top: 0;
    // transition: transform .3s ease;

    &.isOpen {
      display:flex;
      // transition: transform .3s ease;
    }

    .navbar__item {
      text-align: center;
      transition: transform .3s ease;
      .navbar__item__icon {
        display: block;
        font-size: 100px;
        color: $primary-500;
      }

      &:hover {
        transform: scale(1.1);
      }
    }

    .navbar__container {
      max-width: $max-width;
      margin: 0 auto;
      vertical-align: middle;
    }

    .full-navbar__header {
      height: 64px;
    }

    .navbar__close {
      color: $neutral-700;
      font-size: 24px;
    }
  }
</style>
