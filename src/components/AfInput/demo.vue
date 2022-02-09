<template>
  <div class="main">
    <!-- <Input style="width: 100px" placeholder="placeholder" />
    <Input style="width: 300px" placeholder="disabled input" disabled />
    <Input style="width: 300px" defaultValue="large size" size="lg" />
    <Input style="width: 300px" placeholder="small size" size="sm" /> -->
    <Input
      style="width: 300px"
      defaultValue="prepend text"
      prepend="https://"
    />

    <Input style="width: 300px" defaultValue="google" append=".com" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components: {},
});
</script>
<style lang="scss"></style>
