import { PropType } from 'vue';
import './index.scss';
import { NewStringSchema } from './types';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: string;
    };
    prop: {
        type: StringConstructor;
        default: string;
    };
    rules: {
        type: PropType<NewStringSchema | NewStringSchema[]>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    label?: unknown;
    prop?: unknown;
    rules?: unknown;
} & {
    label: string;
    prop: string;
} & {
    rules?: NewStringSchema | NewStringSchema[] | undefined;
}>, {
    label: string;
    prop: string;
}>;
export default _default;
