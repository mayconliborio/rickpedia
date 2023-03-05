<script setup lang="ts">
import { CharacterCard} from "@/types/character";
interface CardCharacterProps {
  character: CharacterCard
}

defineProps<CardCharacterProps>()

function altImg(name: string) {
  return `Imagem de ${name}, personagem da série de televisão Rick and Morty`
}

</script>
<template>
  <q-card class="my-card">
    <img :src="character.image" :alt="altImg(character.image)"/>
    <q-card-section class="my-card-header">
      <div class="title">{{ character.name }}</div>
      <div class="specie">{{ character.species }}</div>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>
* {
  font-family: Roboto, sans-serif;
}
img {
  width: 100%;
}

.my-card {
  overflow: hidden;
  background: #FFFFFF;
  /* 2 dp */

  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 3px 4px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;

  max-width: 250px;
  margin-top: 15px;
}

.my-card-header {
  padding: 12px 16px;
}

.title {
  color: rgba(0, 0, 0, 0.87);
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
  letter-spacing: 0.15px;
}

.specie {
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.25px;
}
</style>