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
      <div class="name">{{ character.name }}</div>
      <div class="species">{{ character.species }}</div>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
}

.my-card {
  overflow: hidden;
  background: #FFFFFF;
  border-radius: 4px;
  max-width: 300px;
  margin-top: 15px;
}

.my-card-header {
  padding: 12px 0 12px 16px;
}

.my-card:hover .my-card-header {
  background-color: #f7f7f7;
}

.name {
  font-size: 20px;
  line-height: 30px;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 500;
  letter-spacing: 0.15px;
}

.species {
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  letter-spacing: 0.25px;
}
</style>