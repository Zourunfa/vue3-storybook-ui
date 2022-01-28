import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import TabPane from '../Tabs/tabPane'

TabPane.install = (app: App) => {
  app.component(TabPane.name, TabPane)
}


export default TabPane as SFCWithInstall<typeof TabPane>