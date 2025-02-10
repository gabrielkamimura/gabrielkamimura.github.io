<script setup>
</script>

<template>
<section class="app-footer">
    <p>Website <b>projetado</b> e <b>desenvolvido</b> com <i class="app-footer__icon fa-solid fa-heart"></i> por <b>Gabriel Kamimura</b></p>
</section>
</template>

<style scoped lang="scss">

  @import '../assets/tokens';

.app-footer {
    padding: 2rem;
    padding-top: 48px;
    padding-bottom: 48px;
    text-align: center;
    background-color: $background-400;

    &__icon {
        color: $primary-500;
    }
}
</style>
