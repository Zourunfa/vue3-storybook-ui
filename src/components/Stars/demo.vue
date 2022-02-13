<template>
  <div class="main">
    <Stars :onGetStarNum="getNums" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Stars from './Stars';
export default defineComponent({
  name: 'StarsDemo',
  components: {
    Stars,
  },
  setup() {
    const getNums = (num: number) => {
      console.log(num);
    };

    return {
      getNums,
    };
  },
});
</script>
<style lang="scss"></style>
