import * as yup from 'yup';

const FormItemKey = 'formItemkey'
const FormKey = 'formKey'

type ValidateFunc = (calllback: (valid: boolean) => void) => boolean

interface AfFormContext {
  model: Record<string, any>,
  rules: FormRules;
  validate: ValidateFunc;
  addItem(item: Partial<FormItemContext>): void
  removeItem(id: string): void
}

interface FormItemContext {
  id: string
  prop: string
  validate: (value: string) => boolean
  handleInputChange(value: string): void;
  handleInputBlur(value: string): void;
}
type triggerType = 'input' | 'blur'

interface NewStringSchema {
  validateFunc: yup.StringSchema;
  trigger: triggerType
}

interface FormRules {
  [key: string]: NewStringSchema | NewStringSchema[]
}


export { ValidateFunc, AfFormContext, FormKey, FormRules, triggerType, NewStringSchema, FormItemKey, FormItemContext }