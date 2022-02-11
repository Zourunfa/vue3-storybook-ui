import { ref } from 'vue';
import Input from '../components/AfInput/Input';
export default {
  title: 'Example/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'lg'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Input },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const inputValue = ref('123');

    return { inputValue, args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Input v-bind="args"    >按钮</Input>  ',
});

const Template2 = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Input },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const inputValue = ref('123');

    return { inputValue, args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<Input v-bind="args"     v-model="inputValue">按钮</Input> {{inputValue}} ',
});

export const Primary = Template.bind({});

(Primary as any).args = {
  // modelValue: '',
  placeholder: 'placeholder',
  style: 'width: 200px',
  disabled: false,
};

export const PrependInput = Template.bind({});

(PrependInput as any).args = {
  // modelValue: '',
  placeholder: 'placeholder',
  style: 'width: 200px',
  prepend: 'https://',
  disabled: false,
};

export const AppendInput = Template.bind({});

(AppendInput as any).args = {
  // modelValue: '',
  placeholder: 'placeholder',
  style: 'width: 200px',
  append: '.com',
  disabled: false,
};

export const ModelInput = Template2.bind({});

(ModelInput as any).args = {
  // modelValue: '',
  placeholder: 'placeholder',
  style: 'width: 200px',
  // append: '.com',
  disabled: false,
};

// export const customTabNode = Template2.bind({});

// (customTabNode as any).args = {
//   modelValue: '',
// };
