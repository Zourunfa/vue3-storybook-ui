import { defineComponent, ref, watch } from 'vue';
import './index.scss';
import {
  nodeKey,
  RequiredTreeNodeOptions,
  TreeNodeOptions,
  TreeProps,
} from './types';
import TreeNode from './node';
import { cloneDeep } from 'lodash';
import { RequiredArraySchema } from 'yup/lib/array';
const props = TreeProps();

function falttenTree(source: TreeNodeOptions[]): RequiredTreeNodeOptions[] {
  const res: RequiredTreeNodeOptions[] = [];

  const recursion = (
    list: TreeNodeOptions[],
    level = 0,
    parent: RequiredTreeNodeOptions | null = null,
  ): RequiredTreeNodeOptions[] => {
    return list.map((item) => {
      const node: RequiredTreeNodeOptions = {
        ...item,
        level,
        loading: false,
        disabled: item.disabled || false,
        expanded: item.expanded || false,
        selected: item.selected || false,
        checked: item.checked || parent?.checked || false,
        hasChildren: item.hasChildren || false,
        parentKey: parent?.nodeKey || null, //除开顶级node都有
        children: item.children || [],
      };

      res.push(node);
      if (node.children.length && item.expanded) {
        // 要展开是才渲染 所以需要判断展开
        node.children = recursion(node.children, level + 1, node);
      }
      return node;
    });
  };
  if (source.length) {
    recursion(source);
  }
  return res;
}

export default defineComponent({
  name: 'AfTree',
  props: props,
  components: {
    TreeNode,
  },
  setup(props, { emit }) {
    const flatList = ref<RequiredTreeNodeOptions[]>([]);

    watch(
      () => props.source,
      (newVal) => {
        flatList.value = falttenTree(newVal);
      },
      { immediate: true },
    );

    const expandNode = (node: RequiredTreeNodeOptions) => {
      // 深拷贝
      const trueChildren = cloneDeep(node.children);
      node.children = trueChildren.map((item) => {
        return {
          ...item,
          level: item.level || node.level + 1,
          loading: false,
          disabled: item.disabled || false,
          expanded: item.expanded || false,
          selected: item.selected || false,
          // false也是和法治  不能用  ?? 更严格的或  只有前面是null和undefined才会走到后面去
          checked: item.checked ?? node.checked,
          hasChildren: item.hasChildren || false,
          parentKey: node.nodeKey || null, //除开顶级node都有
          children: item.children || [],
        };
      });

      const targetIndex = flatList.value.findIndex(
        (item) => item.nodeKey === node.nodeKey,
      );
      if (targetIndex > -1) {
        flatList.value.splice(
          targetIndex + 1,
          0,
          ...(node.children as RequiredTreeNodeOptions[]),
        );
      }
    };

    // 收起
    const collapseNode = (node: RequiredTreeNodeOptions) => {
      const delKeys: nodeKey[] = [];
      const recursion = (currentNode: RequiredTreeNodeOptions) => {
        if (currentNode.children.length) {
          node.children.forEach((item) => {
            delKeys.push(item.nodeKey);
            if (item.expanded) {
              // 需要收起
              item.expanded = false;
              recursion(item as RequiredTreeNodeOptions);
            }
          });
        }
      };

      recursion(node);
      if (delKeys.length) {
        flatList.value = flatList.value.filter(
          (item) => !delKeys.includes(item.nodeKey),
        );
      }
    };

    const handleToggleExpand = (node: RequiredTreeNodeOptions) => {
      node.expanded = !node.expanded;
      if (node.expanded) {
        // 展开此node下面的children  首次展开是 用户可能自带children

        if (node.children.length) {
          expandNode(node);
        } else {
          // 懒加载
        }
      } else {
        // 收起
        collapseNode(node);
      }
    };

    const renderChildren = () => {
      return flatList.value.map((node, index) => {
        return (
          <TreeNode
            key={node.nodeKey}
            node={node}
            onToggleExpand={handleToggleExpand}
          />
        );
      });
    };

    return () => {
      return (
        <div class="af-tree-wrap">
          <div class="af-tree">{renderChildren()}</div>
        </div>
      );
    };
  },
});
