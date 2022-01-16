<template>
  <div class="main">
    <af-tree :source="list"></af-tree>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import AfTree from './index';
import { TreeNodeOptions } from './types';

function recursion(path = '0', level = 3): TreeNodeOptions[] {
  const list = [];
  for (let i = 0; i < 5; i += 1) {
    const nodeKey = `${path}-${i}`;
    const treeNode: TreeNodeOptions = {
      nodeKey,
      name: nodeKey,
      children: [],
      hasChildren: true,
      // expanded: true,
    };

    if (level > 0) {
      treeNode.children = recursion(nodeKey, level - 1);
    } else {
      treeNode.hasChildren = false;
    }

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

    onMounted(() => {
      list.value = recursion();
      console.log(list.value);
    });

    return {
      list,
    };
  },
});
</script>
<style lang="scss"></style>
