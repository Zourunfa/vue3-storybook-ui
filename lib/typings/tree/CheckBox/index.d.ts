import './index.scss';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    halfChecked: {
        type: BooleanConstructor;
        default: boolean;
    };
    onChange: import("vue").PropType<(arg: boolean) => void>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    disabled?: unknown;
    halfChecked?: unknown;
    onChange?: unknown;
} & {
    modelValue: boolean;
    disabled: boolean;
    halfChecked: boolean;
} & {
    onChange?: ((arg: boolean) => void) | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
    disabled: boolean;
    halfChecked: boolean;
}>;
export default _default;
