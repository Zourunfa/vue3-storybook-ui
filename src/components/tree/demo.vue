<template>
  <div class="main">
    <button @click="selectedNode">获取选中节点</button>
    <button @click="checkedNodes">获取勾选节点</button>
    <button @click="halfCheckedNodes">获取半勾选节点</button>
    <af-tree :source="list" :lazyLoad="lazyLoad" show-checkbox ref="Atree">
      <!--  show-checkbox
      :render="renderNode" -->
      <template #icon="loading">
        <i v-if="loading" class="iconfont iconcustom-icon ico-loading"></i>
        <i v-else class="iconfont iconzhankai"></i>
      </template>
    </af-tree>
  </div>
</template>

<script lang="tsx">
import { divide } from 'lodash';
import { defineComponent, onMounted, ref } from 'vue';
import AfTree from './index';
import { TreeInstance, TreeNodeOptions } from './types';

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
    const renderNode = (node: TreeNodeOptions) => {
      return (
        <div style="padding: 0 4px;">
          <b style="color: #f60;">{node.name}</b>
        </div>
      );
    };
    const list = ref<TreeNodeOptions[]>([]);

    const Atree = ref<TreeInstance>();
    const selectedNode = () => {
      const node = Atree.value!.getSelectedNode();
      console.log(node);
    };
    const checkedNodes = () => {
      const nodes = Atree.value!.getCheckedNodes();
      console.log(nodes);
    };
    const halfCheckedNodes = () => {
      const nodes = Atree.value!.getHalfCheckedNodes();
      console.log(nodes);
    };
    const lazyLoad = (
      node: TreeNodeOptions,
      callback: (children: TreeNodeOptions[]) => void,
    ) => {
      console.log('loadData', node);
      const result: TreeNodeOptions[] = [];
      for (let i = 0; i < 4; i += 1) {
        const nodeKey = `${node.nodeKey}-${i}`;
        const treeNode: TreeNodeOptions = {
          nodeKey,
          name: nodeKey,
          children: [],
          hasChildren: true,
          // disabled: i % 2 == 0,
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
      renderNode,
      selectedNode,
      checkedNodes,
      halfCheckedNodes,
      Atree,
    };
  },
});
</script>
<style lang="scss"></style>
