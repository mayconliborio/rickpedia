<script setup lang="ts">
</script>

<template>
  <div class="background">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.background {
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  justify-content: center;
}
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  justify-content: center;
}

</style>
