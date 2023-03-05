<template>
  <div class="q-pa-md row items-start q-gutter-md card-list">
    <CardCharacter
        class="card-item"
        v-for="character in characters"
        :character="character"
        @card-click="getCharacterDetails(character.id)"
    ></CardCharacter>
  </div>
</template>

<script setup lang="ts">
import { CharacterCard} from "@/types/character";
import CardCharacter from "@/components/CardCharacter.vue";
import router from "@/router/router";

interface CharacterList {
  characters: CharacterCard[]
}

defineProps<CharacterList>()

function getCharacterDetails(id: number) {
  router.push({name: 'CharacterDetails', params: {id}})
}

</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card-item {
  margin: 40px;
  transition: 0.5s;
}
.card-item:hover {
  transform: scale(1.05);
  transition: 0.3s;
}
</style>