import { App } from 'vue';
import FormItem from './FormItem/index';
// 注意这里虽然叫做Input但是全局引入的时候必须使用注册的name引入
import Input from './AfInput';
import Form from './Form';
import Button from './Button';
import TabPane from './TabPane'
import AfTabs from './Tabs'

// import AfTree from './tree'

const components = [
  Input,
  FormItem,
  Form,
  Button,
  TabPane,
  AfTabs,
  // AfTree

]

export {
  Input,
  FormItem,
  Form,
  Button,
  TabPane,
  AfTabs,
  // AfTree
}


export default function (app: App) {
  components.forEach(item => {
    app.component(item.name, item)
  })
}