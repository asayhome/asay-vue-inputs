import { ref, openBlock, createElementBlock, Fragment, withDirectives, createElementVNode, normalizeClass, vModelDynamic, toDisplayString, createCommentVNode } from 'vue';

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

const _hoisted_1 = ["type"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    withDirectives(createElementVNode("input", {
      type: $props.type,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.inputFiled) = $event)),
      class: normalizeClass($props.inputAppendClass)
    }, null, 10 /* CLASS, PROPS */, _hoisted_1), [
      [vModelDynamic, $setup.inputFiled]
    ]),
    ($props.errorMessage)
      ? (openBlock(), createElementBlock("span", {
          key: 0,
          style: {"color":"red"},
          class: normalizeClass($props.errorAppendClass)
        }, toDisplayString($props.errorMessage), 3 /* TEXT, CLASS */))
      : createCommentVNode("v-if", true)
  ], 64 /* STABLE_FRAGMENT */))
}

script.render = render;
script.__file = "src/InputField.vue";

var components = { InputField: script };

const plugin = {
    install(Vue) {
        for (const prop in components) {
            if (components.hasOwnProperty(prop)) {
                const component = components[prop];
                Vue.component(component.name, component);
            }
        }
    }
};

export { plugin as default };
