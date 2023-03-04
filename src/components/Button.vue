<template>
  <QBtn class="button" :label="label"></QBtn>
</template>

<script setup lang="ts">

import { QBtn } from "quasar";
interface ButtonProps {
  label: string
}
defineProps<ButtonProps>()
</script>

<style lang="scss">
    .button {
      background-color: $cor-fundo;
      color: $cor-texto;
      border: 1px solid $cor-texto;
      margin: 10px;
      font-weight: 700;
      font-size: 18px;
      padding: 10px 10px;
      border-radius: 4px;
    }
</style>