import { defineComponent, inject } from 'vue';
import { FormItemContext, FormItemKey } from '../FormItem/types';
import './index.scss';

export default defineComponent({
  name: 'AInput',
  inheritAttrs: false,
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    type: {
      validator: (value: string): boolean => {
        return (
          ['text', 'password', 'number', 'textarea', 'time'].indexOf(value) !==
          -1
        );
      },
      default: 'text',
    },
  },
  setup(props, { emit, attrs }) {
    // console.log(attrs, attrs.readonly);
    const formItemctx = inject<FormItemContext>(FormItemKey);

    const handleInput = (event: Event) => {
      const value = (event.target as HTMLInputElement).value;
      if (value !== props.modelValue) {
        // 如果输入框里面的值不等于modelValue  就发送这个事件
        emit('update:modelValue', value);

        formItemctx?.handleInputChange(value);
      }
    };

    const handleBlur = () => {
      formItemctx?.handleInputBlur(props.modelValue);
    };

    return () => {
      return (
        <div class="af-field-wrap">
          <input
            class="af-field"
            type={props.type}
            placeholder={attrs.placeholder as string}
            onInput={handleInput}
            onBlur={handleBlur}
            value={props.modelValue}
          />
        </div>
      );
    };
  },
});
