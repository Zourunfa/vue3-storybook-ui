<template>
  <div class="main">
    <Magnifier
      v-magnifier
      imgUrl="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00367-241.jpg"
      :blank="true"
      link="https://baidu.com"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { magnifier } from '../directives';
export default defineComponent({
  name: 'MagnifierDemo',
  directives: {
    magnifier,
  },
  components: {},
});
</script>
<style lang="scss">
.main {
  margin: 100px auto;
  img {
    height: 374px;
    width: 640px;
  }
}
</style>
