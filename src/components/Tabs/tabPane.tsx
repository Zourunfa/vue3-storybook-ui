import {
  defineComponent,
  getCurrentInstance,
  inject,
  onMounted,
  ref,
  watch,
} from 'vue';
import { tabPaneProps } from './types';

const props = tabPaneProps();
export default defineComponent({
  name: 'TabPane',
  props: props,
  setup(props, { emit, slots }) {
    const parentNode = getCurrentInstance()?.parent;
    console.log(slots);

    return () => {
      return (
        <div class="pane" v-show={parentNode?.props.modelValue === props.name}>
          {slots.default!()}
        </div>
      );
    };
  },
});
