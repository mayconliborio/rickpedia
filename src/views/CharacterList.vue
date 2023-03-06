<script setup lang="ts">
import {Character, CharactersData, Pagination} from "@/types/character";
import {GET_CHARACTERS_CARD_DATA} from '@/graphql/queries/characters';
import {computed, onMounted, ref} from "vue";
import client from "../graphql/client";
import CardCharacterList from "@/components/CardCharacterList.vue";
import Button from "@/components/Button.vue";
import LoadingPortal from "@/components/LoadingPortal.vue";
import LoadingInfinite from "@/components/LoadingInfinite.vue";

const pagination = ref<Pagination>({next: 1, count: 0, pages: 1, current: 0})
const characters = ref<Character[]>([])
const nameFilter = ref<string>('')
const loading = ref(true)
const filterLoading = ref(false)
const infiniteScroll = ref(false)
const lastFilter = ref(null)
const showMoreLoading = computed(() => !loading.value && showMore.value && !infiniteScroll.value)
const showMore = computed(() =>
    pagination.value.current < pagination.value.pages
)

onMounted(async () => {
  await getCharacters()
})

async function getCharacters(page: number = 1) {
  loading.value = true;

  const variables = {
    page,
    nameFilter: nameFilter.value
  }

  const timeoutPopulateData = () => {
    loading.value = false
    lastFilter.value = variables.nameFilter
    pagination.value = {
      ...info,
      current: page,
    }
  }
  const data: CharactersData = await client.request(GET_CHARACTERS_CARD_DATA, variables)

  const {info, results} = data.characters

  if (page === 1) {
    setTimeout(() => {
      characters.value = results;
      timeoutPopulateData()
    }, 600)
  }

  if (page > 1 && page === pagination.value.next) {
    setTimeout(() => {
      characters.value = [
        ...characters.value,
        ...results,
      ]
      timeoutPopulateData()
    }, 600)
  }
}

async function filterCharacters() {
  if (lastFilter.value !== nameFilter.value) {
    filterLoading.value = true;
    await getCharacters();

    setTimeout(() => {
      filterLoading.value = false;
    }, 600)
  }
}

async function showMoreCharacters() {
  infiniteScroll.value = true

  await getCharacters(pagination.value.next)

  setTimeout(() => {
    infiniteScroll.value = false
  }, 600)
}
</script>

<template>
  <div id="character-list-page" class="suavization-animation">
    <img class="logo" src="/src/assets/image/logo.png" alt="Logo da série de televisão Rick and Morty">

    <div class="row filter-box">
      <q-input
          outlined
          class="col-12"
          v-model="nameFilter"
          label="Filter character(s) by name..."
          @keydown.tab="filterCharacters"
          @keydown.enter="filterCharacters"
          @blur="filterCharacters"
      />
    </div>

    <LoadingPortal v-if="loading && !infiniteScroll" class="suavization-animation"></LoadingPortal>
    <CardCharacterList v-else class="suavization-animation" :characters="characters"></CardCharacterList>
    <div v-if="characters.length && characters.length > 0" style="display: flex; width: 100%; justify-content: flex-end; font-size: 14px; letter-spacing: 1.5px">
      <span>
        Showing: <strong>{{ characters.length }}</strong> of <strong> {{ pagination.count }}</strong>
      </span>
    </div>
    <LoadingInfinite v-if="infiniteScroll" class="suavization-animation" style="margin-top: 10px;"/>
    <Button
        v-if="showMoreLoading && !infiniteScroll"
        class="suavization-animation"
        style="margin-top: 10px"
        label="Show more"
        @click="showMoreCharacters()"
    />
  </div>
</template>

<style lang="scss">
.logo {
  width: 100%;
  max-width: 500px;
  margin: 20px 0 60px;
}

#character-list-page {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
}

.filter-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;
  margin-bottom: 60px;
}

.q-field--outlined .q-field__control {
  border-radius: 8px !important;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.5);
}
</style>
