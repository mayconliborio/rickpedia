<template>
  <div class="column page-not-found">
    <h1 class="header">Dimension Not Found - Error 404</h1>
    <p class="description">The dimension you are looking not exists.</p>
    <div class="box-img">
      <img class="not-found-image" src="/src/assets/image/rick-portal.png" alt="Portal da série de televisão Rick and Morty">
    </div>
    <Button class="redirect-button" label="Go to another dimension"
      @click="router.push({ name: 'CharacterList' })"></Button>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/Button.vue";
import { useRouter } from "vue-router";
const router = useRouter()
</script>

<style scoped>
.page-not-found {
  margin: 30px 0;
  width: 100%;
  max-width: 90%;
}

.header {
  max-width: 100%;
  font-size: 2rem;
  line-height: 150%
}

.description {
  max-width: 100%;
  margin: 10px 0;
}

.box-img {
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center
}

.not-found-image {
  max-width: 460px;
  min-width: 200px;
  width: 100%;
}

.redirect-button {
  margin: 20px 0;
}
</style>