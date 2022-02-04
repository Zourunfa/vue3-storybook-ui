declare const _default: import("vue").DefineComponent<{
    node: {
        type: import("vue").PropType<Required<import("./types").TreeNodeOptions>>;
        required: boolean;
    };
    render: {
        type: import("vue").PropType<(node: Required<import("./types").TreeNodeOptions>) => JSX.Element>;
        required: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    node?: unknown;
    render?: unknown;
} & {} & {
    node?: Required<import("./types").TreeNodeOptions> | undefined;
    render?: ((node: Required<import("./types").TreeNodeOptions>) => JSX.Element) | undefined;
}>, {}>;
export default _default;
