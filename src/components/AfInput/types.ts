import { PropType } from 'vue'

type InputSize = 'lg' | 'sm'

const inputProps = () => ({

  disabled: Boolean,
  size: String as PropType<InputSize>,
  prepend: String,
  append: String,
  style: Object,
  modelValue: {
    type: String,
    default: ''
  },
  onChange: {
    type: Function as PropType<(value: string) => void>
  }
})


export { inputProps }