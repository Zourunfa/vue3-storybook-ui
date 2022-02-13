import { computed, defineComponent, Ref } from 'vue';
import './icon/iconfont.css';
import { starsProps } from './types';
import './index.scss';
import { useStars } from '../hooks/useStars';

const props = starsProps();
export default defineComponent({
  name: 'StarsDemo',
  props: props,
  emits: ['getStarNum'],
  setup(props, { emit }) {
    const { starNum, setStarNum } = useStars(props.num, () => {
      emit('getStarNum', starNum.value);
    });

    const renderStars = (): JSX.Element[] => {
      const arrNode: Array<JSX.Element> = [];

      for (let i = 1; i <= 5; i++) {
        const classes = computed(() => {
          return {
            iconfont: true,
            'icon-star': true,
            active: i <= starNum.value,
          };
        });

        arrNode.push(
          <span
            class={classes.value}
            onClick={setStarNum.bind(null, i)}
            style={{ fontSize: props.size + 'px' }}
          ></span>,
        );
      }
      return arrNode;
    };

    return () => {
      return <div class="af-stars">{renderStars()}</div>;
    };
  },
});
