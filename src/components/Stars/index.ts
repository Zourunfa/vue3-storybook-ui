import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import Stars from './Stars'

Stars.install = (app: App) => {
  app.component(Stars.name, Stars)
}


export default Stars as SFCWithInstall<typeof Stars>