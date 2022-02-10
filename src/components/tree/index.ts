import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import Tree from './Tree'

Tree.install = (app: App) => {
  app.component(Tree.name, Tree)
}


export default Tree as SFCWithInstall<typeof Tree>