// import AfButton from './Button.vue';
import AfButton from '../components/Button';
// import { withInfo } from '@storybook/addon-info';
// import { addDecorator } from '@storybook/vue3';
// import { addons,makeDecorator } from '@storybook/addons';

// import { makeDecorator } from '@storybook/addons';
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: AfButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['sm', 'lg'],
    },
    btnType: {
      control: { type: 'select' },
      options: ['primary', 'default', 'danger', 'link'],
    },
    label: {},
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AfButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<AfButton v-bind="args">按钮</AfButton>',
});

// const defualtButton = () => {
//   <AfButton onClick={action('clicked')}> defualtButton</AfButton>;
// };
// storiesOf('button component',module)
//   .add('默认 Button',defaultButton)

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  disabled: false,
  label: 'Primary',
};

export const Link = Template.bind({});
Link.args = {
  label: 'Link',
  btnType: 'link',
  href: 'www.baidu.com',
  disabled: false,
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
