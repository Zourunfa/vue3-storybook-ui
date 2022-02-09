import { defineComponent, ref, watch } from 'vue';
import { AutoCompleteProps } from './type';
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
    const suggestions = ref<string[]>([]);

    watch(
      () => props.modelValue,
      (newValue) => {
        const res = props.fetchSuggestions!(newValue);
        suggestions.value = res;

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

    return () => {
      const { onSelect, modelValue } = props;

      return (
        <div class="af-auto-complete">
          <Input
            {...attrs}
            modelValue={modelValue}
            onChange={handleChange}
          ></Input>
          {/* <Input {...attrs}></Input> */}
        </div>
      );
    };
  },
});
