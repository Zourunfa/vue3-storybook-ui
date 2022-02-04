import './index.scss';
declare const _default: import("vue").DefineComponent<{
    defaultIndex: {
        type: StringConstructor;
        default: string;
    };
    mode: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    };
    onSelect: import("vue").PropType<(selectedIndex: string) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    defaultIndex?: unknown;
    mode?: unknown;
    onSelect?: unknown;
} & {
    mode: "horizontal" | "vertical";
    defaultIndex: string;
} & {
    onSelect?: ((selectedIndex: string) => void) | undefined;
}>, {
    mode: "horizontal" | "vertical";
    defaultIndex: string;
}>;
export default _default;
