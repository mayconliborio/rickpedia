<template>
  <div style="padding: 50px;" >
    <InfoBox v-if="currentCharacter" :title="currentCharacter.episode[0].episode" :subtitle="currentCharacter.episode[0].name" :date="currentCharacter.episode[0].air_date"/>
  </div>
</template>

<script setup lang="ts">
import {GET_CHARACTER_DETAILS} from "@/graphql/queries/characters";
import {onMounted, ref} from "vue";
import {Character, CharacterData} from "@/types/character";
import client from "@/graphql/client";
import {useRoute} from "vue-router";
import InfoBox from "@/components/InfoBox.vue";

const loading = ref(false)

const currentCharacter = ref<Character>()

onMounted(async () => {
  loading.value = true;

  const route = useRoute()
  const variables = {
    id: route.params.id
  }

  const data: CharacterData = await client.request(GET_CHARACTER_DETAILS, variables);

  currentCharacter.value = data.character

  loading.value = false;
})
</script>
