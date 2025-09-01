<template>
  <div class="streamhub-simple-root">
    <h1 class="streamhub-title">방송 준비</h1>
    <div class="streamhub-form">
      <label>
        방송명
        <input v-model="broadcastName" type="text" placeholder="방송 제목을 입력하세요" />
      </label>
      <label>
        방송 설명
        <textarea v-model="broadcastDesc" placeholder="방송에 대한 설명을 입력하세요" rows="3" />
      </label>
      <div class="streamhub-row">
        <label>
          마이크
          <select v-model="selectedMic">
            <option>기본 마이크</option>
          </select>
        </label>
        <label>
          스피커
          <select v-model="selectedSpeaker">
            <option>기본 스피커</option>
          </select>
        </label>
      </div>
      <div class="streamhub-row">
        <button class="streamhub-choice-btn">화면 공유</button>
        <button class="streamhub-choice-btn">웹캠</button>
      </div>
      <div class="streamhub-preview">
        <span>미리보기 화면</span>
      </div>
      <button class="streamhub-start-btn" @click="startBroadcast">방송 시작</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import '../assets/StreamHub.scss';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'StreamHub',
  setup() {
    const router = useRouter();
    const broadcastName = ref('');
    const broadcastDesc = ref('');
    const selectedMic = ref('기본 마이크');
    const selectedSpeaker = ref('기본 스피커');

    const startBroadcast = () => {
      router.push('/streaming');
    };
    
    return {
      broadcastName,
      broadcastDesc,
      selectedMic,
      selectedSpeaker,
      startBroadcast,
    };
  },
});
</script>
