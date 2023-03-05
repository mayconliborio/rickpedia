<script setup lang="ts">

import {Character, CharacterData, Pagination} from "@/types/character";
import {GET_CHARACTERS_CARD_DATA} from '@/graphql/queries/characters';
import {onMounted, ref} from "vue";
import client from "../graphql/client";
import CardCharacterList from "@/components/CardCharacterList.vue";
import Button from "@/components/Button.vue";

const pagination = ref<Pagination>({next: 1, count: 0, pages: 1})

const characters = ref<Character[]>([])

onMounted(async () => {
  await getCharacters()
})

const loading = ref(false)

async function getCharacters(page: number = 1): Promise<void> {


  loading.value = true;
  const variables = {
    page
  }

  const data: CharacterData = await client.request(GET_CHARACTERS_CARD_DATA, variables);

  const {info, results} = data.characters

  if (page === 1) {
    characters.value = results;
  }

  if (page > 1 && page === pagination.value.next) {

    characters.value = [
      ...characters.value,
      ...results,
    ]
  }
  pagination.value = info
  loading.value = false;
}

const nameFilter = ref<string>('')

</script>

<template>
  <div class="center">
    <img class="logo" src="src/assets/image/logo.png" alt="Logo da série de televisão Rick and Morty">

    <div class="q-gutter-md" style="max-width: 300px">
      <q-input v-model="nameFilter" label="Filter by name..."/>
    </div>

    <CardCharacterList :characters="characters"></CardCharacterList>

    <Button label="Show more" @click="getCharacters(pagination.next)"/>
  </div>
</template>

<style>
.center {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
  justify-content: center;
}

.logo {
  margin-top: 100px;
  margin-bottom: 100px;
  max-width: 40%;
}
</style>



