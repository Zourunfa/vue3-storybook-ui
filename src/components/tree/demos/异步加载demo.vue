<template>
  <div class="main">main</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TreeNodeOptions } from '../types';

function recursion(path = '0'): TreeNodeOptions[] {
  const list = [];
  for (let i = 0; i < 2; i += 1) {
    const nodeKey = `${path}-${i}`;
    const treeNode: TreeNodeOptions = {
      nodeKey,
      name: nodeKey,
      children: [],
      hasChildren: true,
    };
    list.push(treeNode);
  }
  return list;
}

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    // const renderNode = (node: TreeNodeOptions) => {
    //   return (
    //     <div style="padding: 0 4px;">
    //       <b style="color: #f60;">{node.name}</b>
    //     </div>
    //   );
    // };
  },
});
</script>
<style lang="scss"></style>
