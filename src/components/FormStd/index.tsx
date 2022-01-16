import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormScd',
  setup(props, { emit, slots }) {
    console.log(slots);

    return () => {
      return (
        <div class="item-content">
          <div class="item-control-wrap">{slots.default!()}</div>
        </div>
      );
    };
  },
});
