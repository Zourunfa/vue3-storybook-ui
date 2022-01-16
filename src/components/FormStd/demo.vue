<template>
  <div class="main">
    <form-scd>
      <div>
        <label for="" class="label">姓名：</label>
        <input-scd :rules="usernameRules" prop="username"></input-scd>
      </div>

      <div>
        <label for="" class="label">密码：</label>
        <input-scd :rules="passwordRules" prop="password"></input-scd>
      </div>
    </form-scd>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import FormScd from './index';
import InputScd from '../InputScd/index';
import * as yup from 'yup';
export default defineComponent({
  name: 'FormScdDemo',
  components: {
    FormScd,
    InputScd,
  },
  setup() {
    const usernameRules = ref<yup.StringSchema>(
      yup.string().required().email(),
    );
    const passwordRules = ref<yup.StringSchema>(yup.string().required().min(8));

    return {
      usernameRules,
      passwordRules,
    };
  },
});
</script>
<style lang="scss"></style>
