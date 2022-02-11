import { defineComponent, onMounted, ref, watch } from 'vue';
import { AutoCompleteProps, DataSourceType } from './type';
import Input from '../AfInput/Input';
import './index.scss';
import '../../assets/iconfont/iconfont.css';
import { useDebounce } from '../hooks/useDebounce';
import classNames from 'classnames';
import { useClickOutside } from '../hooks/useClickOutside';

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
    // const inputModelValue = ref(props.modelValue);
    const isLoading = ref(false);
    const inputModelValue = ref(props.modelValue);
    const highlightIndex = ref(-1);
    const componentRef = ref();
    const triggerSearch = ref(true);

    // onMounted(() => {
    console.log(componentRef);
    // });
    useClickOutside(componentRef, () => {
      suggestions.value = [];
    });

    const debounced = (fn: any, delay = 500) => {
      let timer: any = null;

      return (...args: any[]) => {
        if (timer) {
          clearInterval(timer);
        }
        timer = setTimeout(() => {
          // console.log('过了delay 执行请求');
          fn.apply(this, args);
          timer = null;
        }, delay);
      };
    };

    watch(
      () => props.modelValue,
      debounced((newValue: any) => {
        if (triggerSearch.value) {
          console.log(triggerSearch.value);

          const res = props.fetchSuggestions!(newValue);

          if (res instanceof Promise) {
            isLoading.value = true;
            res.then((data) => {
              isLoading.value = false;
              suggestions.value = data;
            });
          } else {
            suggestions.value = res;
          }

          highlightIndex.value = -1;
        }
        // console.log(suggestions.value);
      }),
      { immediate: true },
    );

    const handleChange = (value: string) => {
      // console.log(value);
      triggerSearch.value = true;
      if (value !== props.modelValue) {
        emit('update:modelValue', value);
      }
    };
    const handleSelect = (item: DataSourceType) => {
      triggerSearch.value = false;
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
        <ul class="af-suggestion-list">
          {suggestions.value.map((item, index) => {
            const cnames = classNames('suggestion-item', {
              'is-active': index === highlightIndex.value,
            });

            return (
              <li
                key={index}
                class={cnames}
                onClick={handleSelect.bind(null, item)}
              >
                {renderTemplate(item)}
              </li>
            );
          })}
        </ul>
      );
    };

    const highlight = (index: number) => {
      if (index < 0) index = 0;
      if (index >= suggestions.value.length) {
        index = suggestions.value.length - 1;
      }
      highlightIndex.value = index;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      console.log(e.keyCode);

      switch (e.keyCode) {
        case 13:
          if (suggestions.value[highlightIndex.value]) {
            handleSelect(suggestions.value[highlightIndex.value]);
          }
          break;
        case 38:
          highlight(highlightIndex.value - 1);
          break;
        case 40:
          highlight(highlightIndex.value + 1);
          break;
        case 27:
          suggestions.value = [];
          break;
        default:
          break;
      }
    };

    return () => {
      const { onSelect, modelValue, style } = props;
      // console.log(suggestions.value);

      return (
        <div class="af-auto-complete" style={style} ref={componentRef}>
          <Input
            {...attrs}
            modelValue={inputModelValue.value}
            onChange={handleChange}
            onKeydown={handleKeyDown}
          ></Input>
          {isLoading.value && (
            <ul>
              <span class="iconfont icon-loading spinner"></span>
            </ul>
          )}
          {suggestions.value.length > 0 && generateDropdown()}
        </div>
      );
    };
  },
});
