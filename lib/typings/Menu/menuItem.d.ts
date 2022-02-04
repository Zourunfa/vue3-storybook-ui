declare const MenuItem: import("vue").DefineComponent<{
    index: {
        type: StringConstructor;
        required: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    index?: unknown;
    disabled?: unknown;
} & {
    disabled: boolean;
} & {
    index?: string | undefined;
}>, {
    disabled: boolean;
}>;
export default MenuItem;
