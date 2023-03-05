<script setup lang="ts">
import {Character, CharactersData, Pagination} from "@/types/character";
import {GET_CHARACTERS_CARD_DATA} from '@/graphql/queries/characters';
import {computed, onMounted, ref} from "vue";
import client from "../graphql/client";
import CardCharacterList from "@/components/CardCharacterList.vue";
import Button from "@/components/Button.vue";

const pagination = ref<Pagination>({next: 1, count: 0, pages: 1, current: 1})
const characters = ref<Character[]>([])
const nameFilter = ref<string>('')
const loading = ref(false)
const showMore = computed(() =>
    pagination.value.current !== pagination.value.pages
)

onMounted(async () => {
  await getCharacters()
})

async function getCharacters(page: number = 1): Promise<void> {
  loading.value = true;

  const variables = {
    page,
    nameFilter: nameFilter.value
  }

  const data: CharactersData = await client.request(GET_CHARACTERS_CARD_DATA, variables);

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

  pagination.value = {
    ...info,
    current: page,
  }
  loading.value = false;
}
</script>

<template>
    <img class="logo" src="/src/assets/image/logo.png" alt="Logo da série de televisão Rick and Morty">

    <div class="q-gutter-md" style="max-width: 70%">
      <q-input v-model="nameFilter" label="Filter by name..."/>
      <Button label="Filter" @click="getCharacters()"></Button>
    </div>

    <CardCharacterList :characters="characters"></CardCharacterList>

    <Button v-if="showMore" label="Show more" @click="getCharacters(pagination.next)"/>
</template>

<style>
.logo {
  margin-top: 100px;
  margin-bottom: 100px;
  max-width: 40%;
}
</style>
