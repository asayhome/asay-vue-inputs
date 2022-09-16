'use strict';

var vue = require('vue');

var script = {
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
    let inputFiled = vue.ref(props.modelvalue);
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

const _hoisted_1 = ["type"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.withDirectives(vue.createElementVNode("input", {
      type: $props.type,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.inputFiled) = $event)),
      class: vue.normalizeClass($props.inputAppendClass)
    }, null, 10 /* CLASS, PROPS */, _hoisted_1), [
      [vue.vModelDynamic, $setup.inputFiled]
    ]),
    ($props.errorMessage)
      ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 0,
          style: {"color":"red"},
          class: vue.normalizeClass($props.errorAppendClass)
        }, vue.toDisplayString($props.errorMessage), 3 /* TEXT, CLASS */))
      : vue.createCommentVNode("v-if", true)
  ], 64 /* STABLE_FRAGMENT */))
}

script.render = render;
script.__file = "src/InputField.vue";

var components = { InputField: script };

const AsayInputs = {
    install(Vue) {
        for (const prop in components) {
            if (components.hasOwnProperty(prop)) {
                const component = components[prop];
                Vue.component(component.name, component);
            }
        }
    }
};

module.exports = AsayInputs;
