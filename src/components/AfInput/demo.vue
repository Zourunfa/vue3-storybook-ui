<template>
  <div class="main">
    <Input style="width: 100px" placeholder="placeholder" />
    <Input style="width: 300px" placeholder="disabled input" disabled />
    <Input style="width: 300px" defaultValue="large size" size="lg" />
    <Input style="width: 300px" placeholder="small size" size="sm" />
    <Input
      defaultValue="prepend text"
      prepend="https://"
      v-model="inputValue"
    />
    {{ inputValue }}
    <Input style="width: 300px" defaultValue="google" append=".com" />
  </div>
</template>

<script lang="tsx">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const inputValue = ref('123');

    return {
      inputValue,
    };
  },
});
</script>
<style lang="scss"></style>
