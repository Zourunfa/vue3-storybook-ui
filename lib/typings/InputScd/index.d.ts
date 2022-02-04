import * as yup from 'yup';
declare const _default: import("vue").DefineComponent<{
    rules: {
        type: typeof yup.StringSchema;
    };
    prop: {
        type: StringConstructor;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    rules?: unknown;
    prop?: unknown;
} & {
    prop: string;
} & {
    rules?: yup.StringSchema<import("yup/lib/types").Maybe<string>, Record<string, any>, import("yup/lib/types").Maybe<string>> | undefined;
}>, {}>;
export default _default;
