<template>
  <input :type="type" v-model="inputFiled" :class="inputAppendClass" />
  <span v-if="errorMessage" style="color: red" :class="errorAppendClass">{{
    errorMessage
  }}</span>
</template>
<script>
import { ref } from "vue";

export default {
  name: "InputField",
  props: {
    modelvalue: {
      default: null,
    },
    type: {
      default: "text",
    },
    errorMessage: {
      default: null,
    },
    inputAppendClass: {
      default: "",
    },
    errorAppendClass: {
      default: "",
    },
  },
  setup() {
    let inputFiled = ref(props.modelvalue);
    return {
      inputFiled,
    };
  },
  watch: {
    inputFiled: function (newVal) {
      this.$emit("update:modelVal", newVal);
    },
  },
};
</script>