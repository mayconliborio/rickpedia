<template>
  <div class="background">
    <img class="portal-loading"  src="/src/assets/image/portal.png" alt="portal loading">
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.background {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 50%;
  height: 100%;
  animation: expandBox 3s ease-in-out infinite;
}
.portal-loading {
  width: 100%;
  animation: girar 3s linear infinite, fadeInOut 2s ease-in-out infinite;
}

@keyframes expandBox {
  0% {
    transform: scale(0.1);
  }
  100% {
    transform: scale(2);
    position: relative;
  }
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 0;
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