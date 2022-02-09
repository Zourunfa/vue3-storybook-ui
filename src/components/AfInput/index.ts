import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import Input from './Input'

Input.install = (app: App) => {
  app.component(Input.name, Input)
}


export default Input as SFCWithInstall<typeof Input>