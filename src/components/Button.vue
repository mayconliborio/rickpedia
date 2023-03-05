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
</style>