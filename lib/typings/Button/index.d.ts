import { PropType } from 'vue';
import { ButtonSize, ButtonType } from './types';
import './index.scss';
declare const _default: import("vue").DefineComponent<{
    label: StringConstructor;
    backgroundColor: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        defalut: boolean;
    };
    size: PropType<ButtonSize>;
    btnType: {
        type: PropType<ButtonType>;
        default: ButtonType;
    };
    href: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    label?: unknown;
    backgroundColor?: unknown;
    disabled?: unknown;
    size?: unknown;
    btnType?: unknown;
    href?: unknown;
} & {
    disabled: boolean;
    btnType: ButtonType;
} & {
    label?: string | undefined;
    backgroundColor?: string | undefined;
    size?: ButtonSize | undefined;
    href?: string | undefined;
}>, {
    disabled: boolean;
    btnType: ButtonType;
}>;
export default _default;
