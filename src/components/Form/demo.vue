<template>
  <div class="main">
    <a-form class="af-form" :model="formValues" :rules="schema" ref="formNode">
      <a-form-item label="用户名:" prop="username">
        <a-input
          v-model="formValues.name"
          placeholder="请输入username"
        ></a-input>
      </a-form-item>
      <a-form-item label="密码:" prop="password">
        <a-input
          v-model="formValues.password"
          placeholder="请输入password"
        ></a-input>
      </a-form-item>
      <a-form-item>
        <button @click="submit" class="af-btn">提交</button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

import * as yup from 'yup';
import { NewStringSchema } from '../FormItem/types';
import AFormItem from '../FormItem/index';
import { FormContext } from 'vee-validate';

export default defineComponent({
  name: 'FormDemo',
  components: {
    AFormItem,
  },
  setup() {
    const formValues = reactive({
      name: '',
      password: '',
    });

    const trigger = (number: number) => {
      return number === 1 ? 'input' : 'blur';
    };

    const usernameRule = ref<NewStringSchema | NewStringSchema[]>([
      { validateFunc: yup.string().required(), trigger: 'input' },
      { validateFunc: yup.string().email(), trigger: 'blur' },
    ]);

    const passwordRule = ref<NewStringSchema | NewStringSchema[]>([
      { validateFunc: yup.string().required(), trigger: 'input' },
      { validateFunc: yup.string().min(8), trigger: 'blur' },
    ]);

    const submit = () => {
      // console.log(formNode);
      console.log('form', formNode.value?.validate());
    };
    const formNode = ref<FormContext | null>(null);

    const schema = reactive({
      username: usernameRule,
      password: passwordRule,
    });
    return {
      formValues,
      schema,
      usernameRule,
      submit,
      formNode,
    };
  },
});
</script>
<style lang="scss">
.#{$af-pre}form {
  margin: auto 0;
  border: 1px solid #f0f0f0;
  padding: 10% 10%;
  width: 30%;
}

.#{$af-pre}btn {
  background-color: $btn-primary;
  width: 100px;
  height: 40px;
  border-radius: 8px 8px;
  margin: auto;
}
</style>
