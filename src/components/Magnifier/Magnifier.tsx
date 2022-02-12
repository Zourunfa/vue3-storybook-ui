import { computed, defineComponent } from 'vue';
import './index.scss';
import { MagnifierProps } from './types';
const props = MagnifierProps();

export default defineComponent({
  name: 'Magnifier',
  props: props,
  setup(props, { emit }) {
    const imgStyles = computed(() => {
      return {
        width: props.imgWidth + 'px',
        height: props.imgHeight + 'px',
      };
    });

    const magStyles = computed(() => {
      return {
        width: props.magWidth + 'px',
        height: props.magHeight + 'px',
      };
    });
    return () => {
      const { imgWidth, imgHeight, link, imgUrl } = props;
      return (
        <div class="img-wrap" style={imgStyles.value}>
          <a class="mag-wrap" style={magStyles.value} href={link}>
            <img class="mag-img" style={imgStyles.value} src={imgUrl} alt="" />
          </a>
          <a class="img-link" href={link}>
            <img
              class="static-img"
              style={imgStyles.value}
              src={imgUrl}
              alt=""
            />
          </a>
        </div>
      );
    };
  },
});
