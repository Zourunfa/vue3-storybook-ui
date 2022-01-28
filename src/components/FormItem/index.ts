import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import FormItem from './FormItem'

FormItem.install = (app: App) => {
  app.component(FormItem.name, FormItem)
}


export default FormItem as SFCWithInstall<typeof FormItem>