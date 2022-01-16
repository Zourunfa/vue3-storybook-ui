<template>
  <div class="main">
    <a-input v-model="text" placeholder="请输入用户名"></a-input>
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AInput from './index';
export default defineComponent({
  name: 'App',
  components: { AInput },
  setup(props, { emit }) {
    const text = ref('aaa');
    return {
      text,
    };
  },
});
</script>
<style lang="scss"></style>
