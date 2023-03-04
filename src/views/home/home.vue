<template>
  <van-nav-bar title="电子药箱" />

  <div class="flex">
    <div class="flex-1">添加药品</div>
    <div class="flex-1">用药提醒</div>
  </div>
</template>

<script lang='ts' setup>
import { reactive,ref} from 'vue'

import { storeToRefs } from 'pinia';
import { useUserStore } from '@/store/user';

defineProps<{ msg: string }>();

const userStore = useUserStore();
// 为避免解构时失去响应性
const { name, sex, realAge } = storeToRefs(userStore);

console.log(name, sex, realAge);

</script>

<style scoped lang='less'>
</style>