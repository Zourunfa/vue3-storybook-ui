import { VNodeTypes } from 'vue';
import { getStyle } from './utils';

export default {
  mounted(el: HTMLDivElement) {


    const oImgWrap = el,
      oMagWrap = oImgWrap.querySelector('.mag-wrap'),
      oMagImg = oImgWrap.querySelector('.mag-img'),
      imgWidth = parseInt(getStyle(oImgWrap, 'width')),
      imgHeight = parseInt(getStyle(oImgWrap, 'height')),
      magWidth = parseInt(getStyle(oMagWrap as Element, 'width')),
      magHeight = parseInt(getStyle(oMagWrap as Element, 'height')),
      imgX = oImgWrap.offsetLeft,
      imgY = oImgWrap.offsetTop


    const init = () => {
      bindEvent()
    }


    function bindEvent() {
      oImgWrap.addEventListener('mouseover', function (e) {
        // 鼠标进来的时候显示放大镜内容

        oMagWrap!.className = oMagWrap!.className + ' show'

        showMag(getXY(e).x, getXY(e).y, getXY(e).mouseX, getXY(e).mouseY)

        document.addEventListener('mousemove', hanldMouseMove)
      }, false)

      oImgWrap.addEventListener('mouseout', hanldMouseOut)
    }

    function hanldMouseMove(e: MouseEvent) {
      showMag(getXY(e).x, getXY(e).y, getXY(e).mouseX, getXY(e).mouseY)
    }

    function hanldMouseOut() {
      // 鼠标出去的时候隐藏放大镜内容
      oMagWrap!.className = 'mag-wrap'

      document.removeEventListener('mousemove', hanldMouseMove, false)
    }


    function showMag(x: number, y: number, mouseX: number, mouseY: number) {
      (oMagWrap as any).style.left = x + 'px';

      (oMagWrap as any).style.top = y + 'px';

      (oMagImg as any).style.left = -x + 'px';

      (oMagImg as any).style.top = -y + 'px';

    }

    function getXY(e: MouseEvent) {
      // 获取鼠标的横纵坐标值
      return {
        x: e.pageX - imgX - magWidth / 2, //当前鼠标的位置相对于document的位置
        y: e.pageY - imgY - magHeight / 2,
        mouseX: e.pageX - imgX, //鼠标距离图片边框的位置
        mouseY: e.pageY - imgY
      }
    }


    init()
  },
}