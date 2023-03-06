<template>
  <div class="background">
    <img class="portal-loading"  src="/src/assets/image/portal.png" alt="portal loading">
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.background {
  max-height: 700px;
  max-width: 700px;
  height: calc(100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 50%;
  animation: expandBox 0.5s linear;
}

.portal-loading {
  width: 100%;
  animation: girar 2s linear infinite;
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
    transform: rotate(-60deg);
  }
  to {
    transform: rotate(300deg);
  }
}
</style>