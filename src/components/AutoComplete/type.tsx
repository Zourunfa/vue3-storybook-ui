import { PropType } from 'vue';
import { inputProps } from '../AfInput/types';

const AutoCompleteProps = () => ({
  ...inputProps(),
  fetchSuggestions: {
    type: Function as PropType<(str: string) => string[]>,
    required: true,
  },
  onSelect: Function as PropType<(item: string) => void>,
});

export { AutoCompleteProps };
