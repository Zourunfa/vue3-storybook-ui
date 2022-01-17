import { PropType, Slot } from 'vue'

type nodeKey = string | number

type CustomEventFuncType<T> = PropType<(arg: T) => void>

// 用户传入的source必须有nodekey和name
interface TreeNodeOptions {
  nodeKey: nodeKey;
  name: string;
  level?: number;    //层级 控制缩进
  loading?: boolean;  //懒加载使用
  disabled?: boolean; //
  expanded?: boolean; //是否展开
  selected?: boolean;  //是否被选中
  checked?: boolean;   // 是否被勾选
  hasChildren?: boolean;
  children?: TreeNodeOptions[];
  parentKey?: nodeKey | null;
}

// 组件内部使用
type RequiredTreeNodeOptions = Required<TreeNodeOptions>


type renderFunc<T> = PropType<(node: T) => JSX.Element>

const TreeProps = () => ({
  source: {

    type: Array as PropType<TreeNodeOptions[]>,
    default: () => []
  },
  render: Function as renderFunc<RequiredTreeNodeOptions>,
  lazyLoad: Function as PropType<(node: RequiredTreeNodeOptions, callback: (children: TreeNodeOptions[]) => void) => void>

})

const TreeNodePorps = () => ({
  node: {
    type: Object as PropType<RequiredTreeNodeOptions>,
    required: true
  },
  iconSlot: Function as PropType<Slot>,
  render: Function as renderFunc<RequiredTreeNodeOptions>,
  onSelectChange: Function as CustomEventFuncType<RequiredTreeNodeOptions>,
  onToggleExpand: Function as CustomEventFuncType<RequiredTreeNodeOptions>,
})

const renderNodeProps = () => ({
  node: {
    type: Object as PropType<RequiredTreeNodeOptions>,
    required: true
  },
  render: {
    type: Function as renderFunc<RequiredTreeNodeOptions>,
    required: true
  }
})


export { CustomEventFuncType, renderNodeProps, TreeNodePorps, TreeProps, TreeNodeOptions, nodeKey, RequiredTreeNodeOptions }