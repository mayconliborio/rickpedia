<template>
    <div class="character-avatar-box">
      <img class="character-avatar-image" :src="image"
           :alt="`${name}, personagem da série Rick and Morty`">
    </div>
    <h2 class="character-name"> {{ name }} </h2>
</template>

<script setup lang="ts">
interface AvatarCharacterProps {
  image: string,
  name: string
}
defineProps<AvatarCharacterProps>()
</script>

<style scoped>
.character-avatar-box {
  display: flex;
  max-width: 300px;
  max-height: 300px;
  height: 75vw;
  width: 75vw;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #F2F2F7;
}

.character-name {
  margin-top: 2%;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
}

@media screen and (max-width: 500px) {
  .character-name {
    font-size: 10vw;
  }
}

</style>