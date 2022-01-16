import { useField, validate } from 'vee-validate';
import { defineComponent } from 'vue';
import * as yup from 'yup';
export default defineComponent({
  name: 'InputScd',
  props: {
    rules: {
      type: yup.StringSchema,
    },
    prop: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const { errorMessage, meta, value } = useField(props.prop, props.rules);
    console.log(meta);

    return () => {
      return (
        <div class="af-field-wrap">
          <input class="af-field" v-model={value.value} type="text" />
          <br />
          <span class="item-error" v-show={meta.touched}>
            {errorMessage.value}
          </span>
        </div>
      );
    };
  },
});
