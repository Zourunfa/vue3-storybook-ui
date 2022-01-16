<template>
  <div class="main">
    <!-- <af-menu
      mode="vertical"
      :defaultIndex="parseInt(0)"
      :onSelect="handleClick"
    >
      <menu-item >link1</menu-item>
      <menu-item :index="1" disabled>link2</menu-item>
      <menu-item :index="2">link3</menu-item>
    </af-menu> -->

    <af-menu defaultIndex="0" mode="vertical" :onSelect="handleClick">
      <menu-item>link1</menu-item>
      <menu-item disabled>link2</menu-item>
      <sub-menu title="下拉">
        <menu-item>2323</menu-item>
        <menu-item>过去</menu-item>
        <menu-item>现在</menu-item>
      </sub-menu>
      <menu-item>link3</menu-item>
    </af-menu>

    <af-menu defaultIndex="0" :onSelect="handleClick">
      <menu-item>link1</menu-item>
      <menu-item disabled>link2</menu-item>
      <sub-menu title="下拉">
        <menu-item>2323</menu-item>
        <menu-item>过去</menu-item>
        <menu-item>现在</menu-item>
      </sub-menu>
      <menu-item>link3</menu-item>
    </af-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AfMenu from './index';
import MenuItem from './menuItem';
import SubMenu from './subMenu';
export default defineComponent({
  name: 'MenuDemo',
  components: {
    AfMenu,
    MenuItem,
    SubMenu,
  },
  setup() {
    const handleClick = (index: string) => {
      alert(index);
    };
    return { handleClick };
  },
});
</script>
<style lang="scss"></style>
