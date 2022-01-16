import { PropType } from 'vue';

// const ButtonSize = [
//   'lg',
//   'sm'
// ] as const

// const ButtonType = [
//   'primary',
//   'default',
//   'danger',
//   'link'
// ] as const

enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = "link"
}


const buttonProps = () => ({
  label: String,
  backgroundColor: String,
  disabled: {
    type: Boolean,
    defalut: false,
  },
  size: String as PropType<ButtonSize>,
  btnType: {
    type: String as PropType<ButtonType>,
    default: ButtonType.Default,
  },
  href: String,

})
export { ButtonType, ButtonSize, buttonProps }