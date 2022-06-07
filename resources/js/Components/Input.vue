<script>
// import { onMounted, ref } from 'vue';
export default {
 data: () => ({
    input:null
  }),

emits:['update:modelValue'],

props:  ['modelValue'],

mounted(){
  if (input.value.hasAttribute('autofocus')) {
        input.value.focus()
    }
}
}
</script>

<template>
    <input class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" ref="input">
</template>
