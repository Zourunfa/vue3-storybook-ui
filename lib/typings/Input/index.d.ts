import { SFCWithInstall } from '../utils/types';
declare const _default: SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    type: {
        validator: (value: string) => boolean;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    type?: unknown;
} & {
    modelValue: string;
    type: string;
} & {}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
    type: string;
}>>;
export default _default;
