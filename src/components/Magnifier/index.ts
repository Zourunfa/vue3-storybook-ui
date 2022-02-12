import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import Magnifier from '../Magnifier/Magnifier'

Magnifier.install = (app: App) => {
  app.component(Magnifier.name, Magnifier)
}



export default Magnifier as SFCWithInstall<typeof Magnifier>