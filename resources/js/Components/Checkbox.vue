<script>
// import { computed } from 'vue';

export default {
//     components:{
// computed
// },

props: {
   checked: {
        type: [Array, Boolean],
        default: false,
    },
    value: {
        default: null,
    }
  },

 computed: {
    proxyChecked:{
            get() {
        return props.checked;
    },

       set(val) {
        emit("update:checked", val);
    }}
 },
    emits:['update:checked']
}
</script>

<template>
    <input type="checkbox" :value="value" v-model="proxyChecked"
           class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
</template>
