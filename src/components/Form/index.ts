import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import Form from './Form'

Form.install = (app: App) => {
  app.component(Form.name, Form)
}



export default Form as SFCWithInstall<typeof Form>