<template>
  <div v-if="currentCharacter && !loading" class="character-detail suavization-animation">
    <AvatarCharacter :image="currentCharacter.image" :name="currentCharacter.name"/>

    <div class="row">
      <InfoList name="Informations" :items="informationList"/>
      <InfoList name="Episodes" scrollable :items="episodeList"/>
    </div>
  </div>
  <LoadingPortal v-else></LoadingPortal>
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

const loading = ref(false)

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
  loading.value = true;
  const route = useRoute()
  const variables = {
    id: route.params.id
  }

  const data: CharacterData = await client.request(GET_CHARACTER_DETAILS, variables);

  currentCharacter.value = data.character

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
  margin: 100px 0;
}

@media screen and (max-width: 750px) {
  .row {
    flex-direction: column;
  }
}
</style>
