import { computed, defineComponent, PropType } from 'vue';
import { buttonProps, ButtonSize, ButtonType } from './types';
import classNames from 'classnames';
import './index.scss';

const props = buttonProps();

export default defineComponent({
  name: 'AfButton',
  props: props,
  setup(props, { emit, slots, attrs }) {
    const classes = classNames('btn', {
      [`btn-${props.btnType}`]: props.btnType,
      [`btn-${props.size}`]: props.size,
      disabled: props.btnType === ButtonType.Link && props.disabled,
    });

    // console.log(attrs);
    // console.log(slots);
    const styles = {
      backgroundColor: props.backgroundColor,
    };

    return () => {
      const { btnType, href, disabled, label } = props;
      if (btnType === ButtonType.Link && href) {
        return (
          <a {...attrs} href={href} class={classes} style={styles}>
            {label}
          </a>
        );
      } else {
        return (
          <button {...attrs} class={classes} disabled={disabled} style={styles}>
            {label}
          </button>
        );
      }
    };
  },
});
