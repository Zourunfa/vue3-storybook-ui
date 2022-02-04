import { PropType } from 'vue';
import { FormRules } from '../FormItem/types';
declare const _default: import("vue").DefineComponent<{
    model: {
        type: ObjectConstructor;
        required: true;
    };
    rules: PropType<FormRules>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    model?: unknown;
    rules?: unknown;
} & {
    model: Record<string, any>;
} & {
    rules?: FormRules | undefined;
}>, {}>;
export default _default;
