import { PropType, Slot } from 'vue';
declare type nodeKey = string | number;
declare type CustomEventFuncType<T> = PropType<(arg: T) => void>;
interface TreeNodeOptions {
    nodeKey: nodeKey;
    name: string;
    level?: number;
    loading?: boolean;
    disabled?: boolean;
    expanded?: boolean;
    selected?: boolean;
    checked?: boolean;
    hasChildren?: boolean;
    children?: TreeNodeOptions[];
    parentKey?: nodeKey | null;
}
declare type RequiredTreeNodeOptions = Required<TreeNodeOptions>;
export declare type renderFunc<T> = PropType<(node: T) => JSX.Element>;
interface TreeNodeInstance {
    node: RequiredTreeNodeOptions;
    halfChecked: () => boolean;
}
interface TreeInstance {
    getSelectedNode: () => RequiredTreeNodeOptions | undefined;
    getCheckedNodes: () => RequiredTreeNodeOptions[] | undefined;
    getHalfCheckedNodes: () => RequiredTreeNodeOptions[] | undefined;
}
declare const TreeProps: () => {
    source: {
        type: PropType<TreeNodeOptions[]>;
        default: () => never[];
    };
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkStrictly: {
        type: BooleanConstructor;
        default: boolean;
    };
    render: PropType<(node: Required<TreeNodeOptions>) => JSX.Element>;
    lazyLoad: PropType<(node: RequiredTreeNodeOptions, callback: (children: TreeNodeOptions[]) => void) => void>;
};
declare const TreeNodePorps: () => {
    node: {
        type: PropType<Required<TreeNodeOptions>>;
        required: boolean;
    };
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkStrictly: {
        type: BooleanConstructor;
        default: boolean;
    };
    onCheckChange: PropType<(arg: [boolean, Required<TreeNodeOptions>]) => void>;
    iconSlot: PropType<Slot>;
    render: PropType<(node: Required<TreeNodeOptions>) => JSX.Element>;
    onSelectChange: PropType<(arg: Required<TreeNodeOptions>) => void>;
    onToggleExpand: PropType<(arg: Required<TreeNodeOptions>) => void>;
};
declare const renderNodeProps: () => {
    node: {
        type: PropType<Required<TreeNodeOptions>>;
        required: boolean;
    };
    render: {
        type: PropType<(node: Required<TreeNodeOptions>) => JSX.Element>;
        required: boolean;
    };
};
export { TreeNodeInstance, TreeInstance, CustomEventFuncType, renderNodeProps, TreeNodePorps, TreeProps, TreeNodeOptions, nodeKey, RequiredTreeNodeOptions };
