<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Home',
  setup() {
    const router = useRouter();
    // 방송 준비 버튼
    const readyBroadcast = () => {
      router.push('/stream');
    };
    return {
      router,
      readyBroadcast,
    };
  },
});
</script>

<template>
  <button @click="readyBroadcast">방송 준비</button>
</template>
