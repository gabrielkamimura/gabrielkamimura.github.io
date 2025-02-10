<script setup>
import { reactive, ref } from "vue";
const project = defineProps({
  title: String,
  description: String,
  image: String,
  to: String,
  role: String,
});

const image = "url('" + project.image + "')";

</script>

<template>
    <RouterLink class="project-card" :to="project.to">
        <section class="project-card__image"></section>
        <h2 class="project-card__title">{{ project.title }}</h2>
        <p class="project-card__description">{{ project.description }} </p>
        <small class="project-card__role">{{ project.role }}</small>
    </RouterLink>
</template>

<style scoped lang="scss">

  @import '../assets/tokens';

  .project-card {
    text-decoration: none;
    color: $neutral-500;
    transition: transform .3s ease;
    
    &:hover {
        transform: scale(1.1);

        .project-card__title {
            color: $primary-500;
        }
    }


    &__image {
        border-radius: 16px;
        background-color: $background-400;
        background: no-repeat left center;
        background-image: v-bind(image);
        height: 400px;
        width: 100%;
    }

    &__title {
        color: $neutral-700;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        margin-top: 40px;
        transition: transform .3s ease;
        @media screen and (min-width: 992px) {
            font-size: 32px;
        }
    }

    //   &__description {

    //   }

    &__role {
        font-style: italic;
        font-weight: 400;
        line-height: normal;
        margin-top: 16px;
        color: $neutral-400;
        @media screen and (min-width: 992px) {
            font-size: 18px;
        }
    }
  }

</style>
