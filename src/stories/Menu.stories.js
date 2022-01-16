import AfMenu from '../components/Menu/index';
import SubMenu from '../components/Menu/subMenu';
import MenuItem from '../components/Menu/menuItem';
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Menu',
  component: AfMenu,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    // defaultIndex:
    onSelect: {},
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AfMenu, SubMenu, MenuItem },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<af-menu v-bind="args"> <menu-item>item1</menu-item>  <menu-item>item2</menu-item>  <menu-item>item3</menu-item> </af-menu>',
});

export const SingleLine_horizontal = Template.bind({});

SingleLine_horizontal.args = {
  mode: 'horizontal',
  defaultIndex: '1',
};

// More on args: https://storybook.js.org/docs/vue/writing-stories/args

export const SingleLine_vertical = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
SingleLine_vertical.args = {
  mode: 'vertical',
  defaultIndex: '0',
};

const TemplateSub = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AfMenu, SubMenu, MenuItem },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<af-menu v-bind="args">   <menu-item>link1</menu-item> <menu-item disabled>link2</menu-item> <sub-menu title="下拉"> <menu-item>2323</menu-item>  <menu-item>过去</menu-item>  <menu-item>现在</menu-item>  </sub-menu><menu-item>link3</menu-item> </af-menu>',
});

export const MultiLine_horizontal = TemplateSub.bind({});
MultiLine_horizontal.args = {
  mode: 'horizontal',
  defaultIndex: '1',
};

export const MultiLine_vertical = TemplateSub.bind({});

MultiLine_vertical.args = {
  mode: 'vertical',
  defaultIndex: '1',
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
