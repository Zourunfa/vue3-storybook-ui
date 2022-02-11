<template>
  <div class="main">
    <!-- <af-input placeholder="请输入用户名"></af-input>
      <a-input placeholder="app"></a-input> -->
    <!-- <form-item-demo></form-item-demo> -->
    <!-- <input-scd-demo></input-scd-demo> -->
    <!-- <form-scd-demo></form-scd-demo> -->
    <!-- <a-form></a-form> -->

    <!-- 按钮 -->
    <!-- <af-button
        backgroundColor="green"
        @click="handleClick"
        btnType="primary"
        size="sm"
        class="test"
        label="primary"
      ></af-button> -->
    <!-- <af-button autofocus btnType="default" size="sm">default</af-button>
      <af-button btnType="danger" size="sm">danger</af-button>
      <af-button btnType="primary" size="lg">Large</af-button>
      <af-button btnType="primary" size="sm" :disabled="true"
        >primary</af-button
      >
      <af-button btnType="link" size="lg" href="http://www.baidu.com"
        >link</af-button
      > -->

    <!-- Menu -->
    <!-- <menu-demo></menu-demo> -->

    <!-- Tabs -->
    <!-- <tabs-demo></tabs-demo> -->
    <!-- <tree-demo></tree-demo> -->

    <input-demo></input-demo>

    <AutoCompleteDemo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// import AfInput from './components/Input/demo.vue';
// import FormItemDemo from './components/FormItem/demo.vue';
// import AForm from './components/Form/demo.vue';
// import InputScdDemo from './components/InputScd/demo.vue';
// import FormScdDemo from './components/FormStd/demo.vue';
// import MenuDemo from './components/Menu/demo.vue';
// import TabsDemo from './components/Tabs/demo.vue';
// import AfButton from './components/Button/index';
// import TreeDemo from './components/tree/demo.vue';
import InputDemo from './components/AfInput/demo.vue';
import AutoCompleteDemo from './components/AutoComplete/demo.vue';
export default defineComponent({
  name: 'App',
  components: {
    // AForm,
    // FormItemDemo,
    // InputScdDemo,
    // FormScdDemo,
    // MenuDemo,
    // TabsDemo,
    // AfButton,
    // TreeDemo,
    InputDemo,
    AutoCompleteDemo,
  },
  setup() {
    const handleClick = () => {
      alert(123);
    };
    return {
      handleClick,
    };
  },
});
</script>

<style lang="scss">
.test {
  color: red;
}
</style>
