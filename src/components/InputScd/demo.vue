<template>
  <div class="main">
    <input-scd></input-scd>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputScd from './index';
export default defineComponent({
  name: 'InputScdDemo',
  components: {
    InputScd,
  },
});
</script>
<style lang="scss"></style>
