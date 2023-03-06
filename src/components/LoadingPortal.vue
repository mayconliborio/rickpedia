<template>
  <div class="background">
    <img class="portal-loading"  src="/src/assets/image/portal.png" alt="portal loading">
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.background {
  max-height: 600px;
  max-width: 600px;
  height: calc(100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 50%;
  animation: expandBox 1.5s ease-in-out;
}
.portal-loading {
  width: 100%;
  transform: scale(1.2);
  animation: girar 3s linear infinite;
}

@keyframes expandBox {
  0% {
    transform: scale(0.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes girar {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>