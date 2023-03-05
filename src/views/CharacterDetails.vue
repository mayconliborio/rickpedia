<template>
 <span>Display character info here!</span>
</template>

<script setup lang="ts">
import {GET_CHARACTER_DETAILS} from "@/graphql/queries/characters";
import {onMounted, ref} from "vue";
import {Character, CharactersByIdsData} from "@/types/character";
import client from "@/graphql/client";
import {useRoute} from "vue-router";

const loading = ref(false)

const currentCharacter = ref<Character>(null)

onMounted(async () => {
  loading.value = true;

  const route = useRoute()
  const variables = {
    ids: [route.params.id]
  }

  const data: CharactersByIdsData = await client.request(GET_CHARACTER_DETAILS, variables);

  currentCharacter.value = data?.charactersByIds[0] ?? currentCharacter.value
  loading.value = false;
})
</script>
