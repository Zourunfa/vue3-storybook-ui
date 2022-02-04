declare const _default: import("vue").DefineComponent<{
    node: {
        type: import("vue").PropType<Required<import("./types").TreeNodeOptions>>;
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
    onCheckChange: import("vue").PropType<(arg: [boolean, Required<import("./types").TreeNodeOptions>]) => void>;
    iconSlot: import("vue").PropType<import("vue").Slot>;
    render: import("vue").PropType<(node: Required<import("./types").TreeNodeOptions>) => JSX.Element>;
    onSelectChange: import("vue").PropType<(arg: Required<import("./types").TreeNodeOptions>) => void>;
    onToggleExpand: import("vue").PropType<(arg: Required<import("./types").TreeNodeOptions>) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("toggle-expand" | "select-change" | "check-change")[], "toggle-expand" | "select-change" | "check-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    node?: unknown;
    showCheckbox?: unknown;
    checkStrictly?: unknown;
    onCheckChange?: unknown;
    iconSlot?: unknown;
    render?: unknown;
    onSelectChange?: unknown;
    onToggleExpand?: unknown;
} & {
    showCheckbox: boolean;
    checkStrictly: boolean;
} & {
    node?: Required<import("./types").TreeNodeOptions> | undefined;
    render?: ((node: Required<import("./types").TreeNodeOptions>) => JSX.Element) | undefined;
    onCheckChange?: ((arg: [boolean, Required<import("./types").TreeNodeOptions>]) => void) | undefined;
    iconSlot?: import("vue").Slot | undefined;
    onSelectChange?: ((arg: Required<import("./types").TreeNodeOptions>) => void) | undefined;
    onToggleExpand?: ((arg: Required<import("./types").TreeNodeOptions>) => void) | undefined;
}> & {
    "onToggle-expand"?: ((...args: any[]) => any) | undefined;
    "onSelect-change"?: ((...args: any[]) => any) | undefined;
    "onCheck-change"?: ((...args: any[]) => any) | undefined;
}, {
    showCheckbox: boolean;
    checkStrictly: boolean;
}>;
export default _default;
