import { defineComponent, ref, watch } from 'vue';
import { AutoCompleteProps, DataSourceType } from './type';
import Input from '../AfInput/Input';
import './index.scss';

const props = AutoCompleteProps();

export default defineComponent({
  name: 'AutoComplete',
  props: props,
  components: {
    Input,
  },
  emits: ['update:modelValue'],
  setup(props, { emit, attrs }) {
    const suggestions = ref<DataSourceType[]>([]);
    const inputModelValue = ref(props.modelValue);

    watch(
      () => props.modelValue,
      (newValue) => {
        const res = props.fetchSuggestions!(newValue);

        if (res instanceof Promise) {
          res.then((data) => {
            suggestions.value = data;
          });
        } else {
          suggestions.value = res;
        }

        console.log(suggestions.value);
      },
      { immediate: true },
    );

    const handleChange = (value: string) => {
      // console.log(value);
      if (value !== props.modelValue) {
        emit('update:modelValue', value);
      }
    };
    const handleSelect = (item: DataSourceType) => {
      inputModelValue.value = item.value;
      suggestions.value = [];

      if (props.onSelect) {
        props.onSelect(item);
      }
    };

    const renderTemplate = (item: DataSourceType) => {
      return props.renderOption ? props.renderOption(item) : item.value;
    };

    const generateDropdown = (): JSX.Element => {
      return (
        <ul>
          {suggestions.value.map((item, index) => {
            return (
              <li key={index} onClick={handleSelect.bind(null, item)}>
                {renderTemplate(item)}
              </li>
            );
          })}
        </ul>
      );
    };

    return () => {
      const { onSelect, modelValue } = props;
      console.log(suggestions.value);

      return (
        <div class="af-auto-complete">
          <Input
            {...attrs}
            modelValue={inputModelValue.value}
            onChange={handleChange}
          ></Input>
          {suggestions.value.length > 0 && generateDropdown()}
        </div>
      );
    };
  },
});
