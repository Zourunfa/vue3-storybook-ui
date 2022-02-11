import { DataSourceType } from '@/components/AutoComplete/type';
import { ref } from 'vue';
import AutoComplete from '../components/AutoComplete';
export default {
  title: 'Example/AutoComplete',
  component: AutoComplete,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    fetchSuggestions: {},
    onSelect: {},
    rednerOption: {},
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AutoComplete },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const inputValue = ref('a');

    const lakers = [
      'bradley',
      'pope',
      'caruso',
      'cook',
      'cousins',
      'james',
      'AD',
      'green',
      'howard',
      'kuzma',
      'McGee',
      'rando',
    ];

    const lakersWithNumber = [
      { value: 'bradley', number: 11 },
      { value: 'pope', number: 1 },
      { value: 'caruso', number: 4 },
      { value: 'cook', number: 2 },
      { value: 'cousins', number: 15 },
      { value: 'james', number: 23 },
      { value: 'AD', number: 3 },
      { value: 'green', number: 14 },
      { value: 'howard', number: 39 },
      { value: 'kuzma', number: 0 },
    ];

    // const handleFetch = (query: string) => {
    //   return lakers
    //     .filter((name) => name.includes(query))
    //     .map((name) => ({ value: name }));
    // };
    // const handleFetch = (query: string) => {
    //   return lakersWithNumber.filter((player) => player.value.includes(query));
    // };

    const selectFunc = (item: string) => {
      console.log(item);
    };

    interface LakerPlayerProps {
      value: string;
      number: number;
    }

    const renderOptions = (item: DataSourceType<LakerPlayerProps>) => (
      <>
        <p>{item.value}</p>
      </>
    );
    const handleFetch = (query: string) => {
      return fetch(`https://api.github.com/search/users?q=${query}`)
        .then((res) => res.json())
        .then(({ items }) => {
          // console.log(items);
          console.log('trigger');
          return items
            .slice(0, 10)
            .map((item: any) => ({ value: item.login, ...item }));
        });
    };
    return {
      handleFetch,
      selectFunc,
      inputValue,
      renderOptions,
      args,
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
  <AutoComplete
  :fetchSuggestions="handleFetch"
  style="width: 400px"
  v-model="inputValue"
  :onSelect="selectFunc"
  :renderOption="renderOptions"
></AutoComplete>`,
});

export const Primary = Template.bind({});

(Primary as any).args = {
  style: 'width: 400px',
};

// export const customTabNode = Template2.bind({});

// (customTabNode as any).args = {
//   modelValue: '',
// };
