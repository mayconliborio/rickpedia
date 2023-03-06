<template>
  <LoadingPortal v-if="loading"></LoadingPortal>
  <div v-else class="character-detail suavization-animation">
    <AvatarCharacter :image="currentCharacter.image" :name="currentCharacter.name"/>
    <div class="row">
      <InfoList name="Informations" :items="informationList"/>
      <InfoList name="Episodes" scrollable :items="episodeList"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {GET_CHARACTER_DETAILS} from "@/graphql/queries/characters";
import {computed, onMounted, ref} from "vue";
import {Character, CharacterData} from "@/types/character";
import client from "@/graphql/client";
import {useRoute} from "vue-router";
import AvatarCharacter from "@/components/AvatarCharacter.vue";
import InfoList from "@/components/InfoList.vue";
import LoadingPortal from "@/components/LoadingPortal.vue";

const loading = ref(true)

const currentCharacter = ref<Character>(null)
const episodeList = computed(() => {
  return currentCharacter.value.episode.map((ep) => {
    return {title: ep.episode, subtitle: ep.name, date: ep.air_date}
  })
})
const informationList = computed(() => {
  return [
    {
      title: 'Gender',
      subtitle: currentCharacter.value.gender
    },
    {
      title: 'Status',
      subtitle: currentCharacter.value.status
    },
    {
      title: 'Species',
      subtitle: currentCharacter.value.species
    },
    {
      title: 'Origin',
      subtitle: currentCharacter.value.origin.name
    },
    {
      title: 'Type',
      subtitle: currentCharacter.value.type
    },
    {
      title: 'Location',
      subtitle: currentCharacter.value.location.name
    },
  ]
})

onMounted(async () => {
  const route = useRoute()
  const variables = {
    id: route.params.id
  }

  const data: CharacterData = await client.request(GET_CHARACTER_DETAILS, variables);

  if(data?.character) {
    currentCharacter.value = data.character
  }

  setTimeout(() => {
    loading.value = false
  }, 600)
})
</script>

<style lang="scss" scoped>
.row {
  width: 100%;
}

.character-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  margin: 0;
}

@media screen and (max-width: 750px) {
  .row {
    flex-direction: column;
  }
}
</style>
