<template>
  <div class="main">
    <af-tree :source="list" :lazyLoad="lazyLoad"></af-tree>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import AfTree from './index';
import { TreeNodeOptions } from './types';

function recursion(path = '0'): TreeNodeOptions[] {
  const list = [];
  for (let i = 0; i < 2; i += 1) {
    const nodeKey = `${path}-${i}`;
    const treeNode: TreeNodeOptions = {
      nodeKey,
      name: nodeKey,
      children: [],

      selected: nodeKey === '0-0',
      hasChildren: true,
    };
    list.push(treeNode);
  }
  return list;
}

export default defineComponent({
  name: 'TreeDemo',
  components: {
    AfTree,
  },
  setup() {
    const list = ref<TreeNodeOptions[]>([]);

    const lazyLoad = (
      node: TreeNodeOptions,
      callback: (children: TreeNodeOptions[]) => void,
    ) => {
      console.log('loadData', node);
      const result: TreeNodeOptions[] = [];
      for (let i = 0; i < 2; i += 1) {
        const nodeKey = `${node.nodeKey}-${i}`;
        const treeNode: TreeNodeOptions = {
          nodeKey,
          name: nodeKey,
          children: [],
          hasChildren: true,
          disabled: i % 2 == 0,
        };
        result.push(treeNode);
      }
      setTimeout(() => {
        callback(result);
      }, 500);
    };
    onMounted(() => {
      list.value = recursion();
      console.log(list.value);
    });

    return {
      list,
      lazyLoad,
    };
  },
});
</script>
<style lang="scss"></style>
