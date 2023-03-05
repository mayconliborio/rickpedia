<template>
  <div class="info-box">
    <h3 class="title">{{ title }}</h3>
    <h4 class="subtitle">{{ subtitle }}</h4>
    <span class="date">{{ date }}</span>
  </div>
</template>

<script setup lang="ts">
interface InfoBoxProps {
  title: string
  subtitle: string
  date?: string
}

defineProps<InfoBoxProps>()
</script>

<style scoped>
.info-box {
  width: 100%;
  padding: 9px 0 12px;
  margin-left: 16px;
  border-bottom: 1px solid rgba(33, 33, 33, 0.08);
}

.title {
  font-size: 16px;
  line-height: 24px;
  color: #081F32;
  font-weight: 700;
  letter-spacing: 0.15px;
}

.subtitle {
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  letter-spacing: 0.25px;
}

.date {
  font-size: 10px;
  line-height: 16px;
  color: #8E8E93;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
</style>
