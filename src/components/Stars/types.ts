import { PropType } from 'vue';

const starsProps = () => ({
  num: {
    type: Number,
    default: 3
  },
  size: {
    type: Number,
    default: 30
  },
  onGetStarNum: Function as PropType<(num: number) => void>,
})

export { starsProps }