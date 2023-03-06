<template>
  <div class="col">
    <h2 class="list-name"> {{ name }} </h2>
    <div :class="{'scroll-box': scrollable}">
      <div :class="{'scroll-content': scrollable}">
        <InfoBox
            v-for="item in items"
            :title="item.title"
            :subtitle="item.subtitle"
            :date="item?.date"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InfoBox from "@/components/InfoBox.vue";
import {ListItem} from "@/types/utils";

interface ListInfoProps {
  name: string,
  items: ListItem[]
  scrollable?: boolean
}

defineProps<ListInfoProps>()
</script>

<style scoped>
.col {
  padding: 0 15px;
  margin-top: 42px;
}

@media screen and (max-width: 500px) {
  .col {
    padding: 0;
  }
}

.list-name {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #8E8E93;
  margin-bottom: 36px;
}

.scroll-box {
  height: 400px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.scroll-content {
  height: 100%;
  width: 100%;
  padding: 10px;
}
</style>