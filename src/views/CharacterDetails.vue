<template>
  <LoadingPortal v-if="loading"></LoadingPortal>
  <div v-if="!loading && currentCharacter" class="character-detail suavization-animation">
    <div class="go-back-box">
      <Button flat label="GO BACK" @click="router.back()"/>
    </div>
    <AvatarCharacter :image="currentCharacter.image" :name="currentCharacter.name"/>
    <div class="row">
      <InfoList name="Informations" :items="informationList"/>
      <InfoList name="Episodes" scrollable :items="episodeList"/>
    </div>
  </div>
  <div v-if="!loading && !currentCharacter" class="column"
       style="margin: 30px 0; justify-content: center; align-items: center">
    <span class="not-found-message">No character found in this dimension!</span>
    <div class="portal-animation">
      <img class="portal-loading" src="/src/assets/image/portal.png" width="400" alt="">
    </div>
    <Button style="margin: 0; width: 100%" label="Go to another dimension"
            @click="router.push({name: 'CharacterList'})"></Button>
  </div>
</template>

<script setup lang="ts">
import {GET_CHARACTER_DETAILS} from "@/graphql/queries/characters";
import {computed, onMounted, ref} from "vue";
import {Character} from "@/types/character";
import client from "@/graphql/client";
import {useRoute, useRouter} from "vue-router";
import AvatarCharacter from "@/components/AvatarCharacter.vue";
import InfoList from "@/components/InfoList.vue";
import LoadingPortal from "@/components/LoadingPortal.vue";
import Button from "@/components/Button.vue";

const loading = ref(true)
const router = useRouter()
const currentCharacter = ref<Character>(null)
const episodeList = computed(() => {
  if (currentCharacter.value) {
    return currentCharacter.value.episode.map((ep) => {
      return {title: ep.episode, subtitle: ep.name, date: ep.air_date}
    })
  }

  return []
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

  await client.query({ query: GET_CHARACTER_DETAILS, variables}).then( result => {
    currentCharacter.value = result.data.character
    setTimeout(() => {
      loading.value = false
    }, 600)
  });

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

.portal-animation {
  max-height: 700px;
  max-width: 700px;
  height: calc(100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 50%;
}

.portal-loading {
  width: 400px;
  animation: girar 2s linear infinite;
}

@keyframes girar {
  from {
    transform: rotate(-60deg);
  }
  to {
    transform: rotate(300deg);
  }
}

.go-back-box {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  font-family: Karla, sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
}
</style>
