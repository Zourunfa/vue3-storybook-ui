import { PropType } from 'vue'


type InputSize = 'lg' | 'sm'
const inputProps = () => ({
  disabled: Boolean,
  size: String as PropType<InputSize>,
  prepend: String,
  append: String,
  style: Object,
})


export { inputProps }