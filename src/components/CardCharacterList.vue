<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <CardCharacter
        v-for="character in characters"
        :character="character"
    ></CardCharacter>
  </div>
</template>

<script setup lang="ts">
import { CharacterCard} from "@/types/character";
import CardCharacter from "@/components/CardCharacter.vue";

interface CharacterList {
  characters: CharacterCard[]
}

defineProps<CharacterList>()

</script>

<style scoped>

</style>