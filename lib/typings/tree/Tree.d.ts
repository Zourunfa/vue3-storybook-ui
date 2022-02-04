import './index.scss';
import { TreeNodeOptions } from './types';
declare const _default: import("vue").DefineComponent<{
    source: {
        type: import("vue").PropType<TreeNodeOptions[]>;
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
    render: import("vue").PropType<(node: Required<TreeNodeOptions>) => JSX.Element>;
    lazyLoad: import("vue").PropType<(node: Required<TreeNodeOptions>, callback: (children: TreeNodeOptions[]) => void) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select-change" | "check-change")[], "select-change" | "check-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    source?: unknown;
    showCheckbox?: unknown;
    checkStrictly?: unknown;
    render?: unknown;
    lazyLoad?: unknown;
} & {
    source: TreeNodeOptions[];
    showCheckbox: boolean;
    checkStrictly: boolean;
} & {
    render?: ((node: Required<TreeNodeOptions>) => JSX.Element) | undefined;
    lazyLoad?: ((node: Required<TreeNodeOptions>, callback: (children: TreeNodeOptions[]) => void) => void) | undefined;
}> & {
    "onSelect-change"?: ((...args: any[]) => any) | undefined;
    "onCheck-change"?: ((...args: any[]) => any) | undefined;
}, {
    source: TreeNodeOptions[];
    showCheckbox: boolean;
    checkStrictly: boolean;
}>;
export default _default;
