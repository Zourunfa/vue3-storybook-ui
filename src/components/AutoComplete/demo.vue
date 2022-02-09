<template>
  <div class="main">
    <AutoComplete
      :fetchSuggestions="handleFetch"
      v-model="inputValue"
    ></AutoComplete>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'AutoCompleteDemo',
  components: {},
  setup() {
    const inputValue = ref('123');

    const lakers = [
      'bradley',
      'pope',
      'caruso',
      'cook',
      'cousins',
      'james',
      'AD',
      'green',
      'howard',
      'kuzma',
      'McGee',
      'rando',
    ];

    const handleFetch = (query: string) => {
      return lakers.filter((name) => name.includes(query));
    };

    return {
      handleFetch,
      inputValue,
    };
  },
});
</script>
<style lang="scss"></style>
