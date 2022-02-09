import { AfTabs } from '../components/index';
import { TabPane } from '../components/index';
import { ref } from 'vue';

export default {
  title: 'Example/Tabs',
  component: AfTabs,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    modelValue: '',
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AfTabs, TabPane },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const currentTabName = ref('tab1');
    return {
      currentTabName,
      args,
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<af-tabs v-model="currentTabName">
  <tab-pane name="tab1">
    content1</tab-pane
  >
  <tab-pane name="tab2">content2</tab-pane>
  <tab-pane name="tab3">content3</tab-pane>
</af-tabs>`,
});

const Template2 = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AfTabs, TabPane },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const currentTabName = ref('tab1');
    return {
      currentTabName,
      args,
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<af-tabs v-model="currentTabName">
  <tab-pane name="tab1">
      <template #title>
        <b style="color: red">自定义tabpane</b>
      </template>
         content1
  </tab-pane>
  <tab-pane name="tab2">content2</tab-pane>
  <tab-pane name="tab3">content3</tab-pane>
</af-tabs>`,
});

export const Primary = Template.bind({});

(Primary as any).args = {
  modelValue: '',
};

export const customTabNode = Template2.bind({});

(customTabNode as any).args = {
  modelValue: '',
};
