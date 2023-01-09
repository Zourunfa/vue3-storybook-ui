import { defineComponent, ref } from 'vue';
import AfTabs from './index';
import TabPane from './tabPane';
export default defineComponent({
  name: 'AForm',
  components: {
    AfTabs,
    TabPane,
  },
  setup(props, { emit }) {
    const currentTabName = ref('tab1');

    return () => {
      return (
        <div>
          <af-tabs v-model={currentTabName.value}>
            <tab-pane
              name="tab1"
              v-slots={{
                default: () => {
                  return <b style="color: red">TabOne</b>;
                },
              }}
            ></tab-pane>

            <tab-pane name="tab2">content2</tab-pane>
            <tab-pane name="tab3">content3</tab-pane>
          </af-tabs>
        </div>
      );
    };
  },
});
