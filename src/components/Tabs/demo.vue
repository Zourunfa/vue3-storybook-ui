<template>
  <div class="main">
    <af-tabs v-model="currentTabName">
      <tab-pane name="tab1">
        <template #title>
          <b style="color: red">TabOne</b>
        </template>

        content1</tab-pane
      >
      <tab-pane name="tab2">content2</tab-pane>
      <tab-pane name="tab3">content3</tab-pane>
    </af-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AfTabs from './index';
export default defineComponent({
  name: 'App',
  components: {
    AfTabs,
  },
  setup() {
    const currentTabName = ref('tab1');
    return {
      currentTabName,
    };
  },
});
</script>
<style lang="scss"></style>
