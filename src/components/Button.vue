<template>
  <QBtn class="button" :label="label"></QBtn>
</template>

<script setup lang="ts">
import {QBtn} from "quasar";

interface ButtonProps {
  label: string
}

defineProps<ButtonProps>()
</script>

<style lang="scss">
.button {
  background-color: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2), 0 1px 18px rgba(0, 0, 0, 0.12), 0 6px 10px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  font-weight: 500 !important;
  font-size: 14px !important;
  line-height: 16px !important;
  letter-spacing: 1.25px;
  transition: 0.3s;
  text-transform: uppercase !important;
}
.button:hover {
  transform: scale(1.05);
  transition: 0.3s;
}
</style>
