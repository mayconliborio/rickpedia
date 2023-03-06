<template>
  <QBtn class="button" :flat="flat" :label="label"></QBtn>
</template>

<script setup lang="ts">
import {QBtn} from "quasar";

interface ButtonProps {
  label: string
  flat?: boolean
}

defineProps<ButtonProps>()
</script>

<style lang="scss">
.button {
  letter-spacing: 1.25px;
  transition: 0.3s;
  font-size: inherit !important;
  font-weight: inherit !important;
  font-family: inherit !important;
  text-transform: uppercase !important;
}
.button:hover{
  transform: scale(1.05);
  transition: 0.3s;
  background-color: #f7f7f7;
}
</style>
