import { computed, defineComponent } from 'vue';
import { inputProps } from './types';
import './index.scss';

const props = inputProps();
export default defineComponent({
  name: 'Input',
  props: props,
  emits: ['update:modelValue', 'change', 'keydown'],
  setup(props, { emit, attrs }) {
    const classes = computed(() => {
      return {
        'af-input-wrapper': true,
        [`input-size-${props.size}`]: props.size,
        'is-disabled': props.disabled,
        'input-group': props.prepend || props.append,
        'input-group-append': !!props.append,
        'input-group-prepend': !!props.prepend,
      };
    });

    const handleChange = (e: Event) => {
      if ((e.target as HTMLInputElement).value !== props.modelValue) {
        emit('update:modelValue', (e.target as HTMLInputElement).value);
        emit('change', (e.target as HTMLInputElement).value);
      }
    };

    return () => {
      const { prepend, disabled, append, style, ...restProps } = props;
      console.log(restProps);

      return (
        <div style={style} class={classes.value}>
          {prepend && <div class="af-input-group-prepend">{prepend}</div>}
          <input
            {...restProps}
            {...attrs}
            value={props.modelValue}
            onInput={handleChange}
            class="af-input-inner"
            disabled={disabled}
          ></input>
          {append && <div class="af-input-group-append"> {append}</div>}
        </div>
      );
    };
  },
});
