<template>
  <div class="loading">
    <div class="dot dot-1"></div>
    <div class="dot dot-2"></div>
    <div class="dot dot-3"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: 35px;
  width: 100px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #333;
  margin: 0 5px;
  animation: bounce 1s infinite;
}

.dot-1 {
  animation-delay: 0s;
}

.dot-2 {
  animation-delay: 0.2s;
}

.dot-3 {
  animation-delay: 0.4s;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>