import { PropType } from 'vue';
declare enum ButtonSize {
    Large = "lg",
    Small = "sm"
}
declare enum ButtonType {
    Primary = "primary",
    Default = "default",
    Danger = "danger",
    Link = "link"
}
declare const buttonProps: () => {
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
};
export { ButtonType, ButtonSize, buttonProps };
