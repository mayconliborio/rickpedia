<script setup lang="ts">

import {Character, CharacterCard, CharacterData} from "@/types/character";
import {GET_CHARACTERS} from '@/graphql/queries/characters';
import {computed, onMounted, ref} from "vue";
import client from "../graphql/client";
import CardCharacterList from "@/components/CardCharacterList.vue";

const pagination = ref({})

const characters = ref<Character[]>([])

onMounted(async () => {
  await getCharacters()
})

async function getCharacters(page: number = 1): Promise<void> {
  const variables = {
    page
  }

  const data: CharacterData = await client.request(GET_CHARACTERS, variables);

  const {info, results} = data.characters

  characters.value = results;
  pagination.value = info
}

function extractProperties(character: Character): CharacterCard {
  const { image, name, species } = character
  return { image, name, species }
}

const simplifiedCharacters = computed<CharacterCard[]>(() => {
  return characters.value.map(extractProperties)
})

</script>

<template>
    <CardCharacterList :characters="simplifiedCharacters"></CardCharacterList>
</template>




