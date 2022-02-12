


const MagnifierProps = () => ({
  link: {
    type: String
  },
  blank: {
    type: Boolean
  },
  imgUrl: String,
  imgWidth: {
    type: Number,
    default: 640
  },
  imgHeight: {
    type: Number,
    default: 375
  },
  magWidth: {
    type: Number,
    default: 200
  },
  magHeight: {
    type: Number,
    default: 200
  }
})


export { MagnifierProps }