<template>
  <div class="column" style="margin: 30px 0">
    <h1 style="font-size: 56px; line-height: 150%">Dimension Not Found - Error 404</h1>
    <p style="margin: 10px 0">The dimension you are looking not exists.</p>
    <div style="display: flex; justify-content: center; align-items: center">

    <img src="/src/assets/image/rick-portal.png" style="width: 460px" alt="Portal da série de televisão Rick and Morty">
    </div>
    <Button style="margin: 20px 0" label="Go to another dimension" @click="router.push({name: 'CharacterList'})"></Button>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/Button.vue";
import {useRouter} from "vue-router";
const router = useRouter()
</script>

<style scoped>

</style>