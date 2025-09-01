<template>
  <div class="streaming-root">
    <!-- Top Navigation -->
    <div class="streaming-topbar">
      <div class="streaming-live-wrap">
        <div class="streaming-live-dot"></div>
        <span class="streaming-live-label">LIVE</span>
        <span class="streaming-topbar-desc">게임 스트리밍</span>
      </div>
      <div class="streaming-topbar-info">
        <div class="streaming-topbar-item">
          <div class="icon-placeholder"></div>
          <span>1,234</span>
        </div>
        <div class="streaming-topbar-item">
          <div class="icon-placeholder"></div>
          <span>01:23:45</span>
        </div>
        <span class="streaming-topbar-desc">채팅</span>
        <div class="icon-placeholder settings"></div>
      </div>
    </div>
    <div class="streaming-main">
      <!-- Main Content Area -->
      <div class="streaming-content">
        <div class="streaming-video-area">
          <img :src="''" alt="Gaming Setup" class="streaming-video-img" />
          <div class="streaming-overlay">
            <div class="streaming-avatar-circle">
              <span class="streaming-avatar-label">GM</span>
            </div>
            <div>
              <div class="streaming-overlay-title">GameMaster_Pro</div>
              <div class="streaming-overlay-desc">게임 스트리밍</div>
            </div>
          </div>
          <div class="streaming-thumbnails">
            <div v-for="i in 4" :key="i" class="streaming-thumbnail">
              <img :src="`/gaming-monitor-.png?height=48&width=80&query=gaming monitor ${i} with colorful abstract wallpaper`" :alt="`Monitor ${i}`" class="streaming-thumbnail-img" />
            </div>
          </div>
        </div>
        <div class="streaming-controls">
          <div class="streaming-btn-group">
            <h2 class="streaming-title">방송명 위치</h2>
            <button
              :class="['streaming-btn', isMuted && 'active danger']"
              @click="isMuted = !isMuted"
            >
              <div class="icon-placeholder"></div>
              <span>음성</span>
            </button>
            <button
              :class="['streaming-btn', !isVideoOn && 'active danger']"
              @click="isVideoOn = !isVideoOn"
            >
              <div class="icon-placeholder"></div>
              <span>영상</span>
            </button>
            <button class="streaming-btn">
              <div class="icon-placeholder"></div>
              <span>화면공유</span>
            </button>
          </div>
          <button class="streaming-btn danger streaming-broadcast-btn" @click="stopBroadcast">
            <div class="icon-placeholder"></div>
            방송 중단
          </button>
        </div>
      </div>
      <!-- Chat Panel -->
      <div class="streaming-chat-panel">
        <div class="streaming-chat-header">
          <div class="icon-placeholder"></div>
          <span class="streaming-chat-header-count">456</span>
          <div class="icon-placeholder"></div>
          <span class="streaming-chat-header-count">1,234</span>
        </div>
        <div class="streaming-chat-messages">
          <div v-for="(msg, index) in chatMessages" :key="index" class="streaming-chat-message">
            <div class="streaming-chat-avatar">
              {{ msg.avatar }}
            </div>
            <div class="streaming-chat-content">
              <div>
                <span class="streaming-chat-user">{{ msg.user }}</span>
                <span class="streaming-chat-time">{{ msg.time }}</span>
              </div>
              <p class="streaming-chat-text">{{ msg.message }}</p>
            </div>
          </div>
        </div>
        <div class="streaming-chat-input-wrap">
          <div class="streaming-chat-input-row">
            <input
              v-model="chatMessage"
              @keypress.enter="sendChat"
              placeholder="채팅을 입력하세요..."
              class="streaming-chat-input"
            />
            <button @click="sendChat" class="streaming-chat-send-btn">
              <div class="icon-placeholder"></div>
            </button>
          </div>
          <div class="streaming-chat-viewers">1,234명이 시청 중</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import '../assets/StreamingInterface.scss';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'StreamingInterface',
  setup() {
    const router = useRouter();
    const isMuted = ref(false);
    const isVideoOn = ref(true);
    const chatMessage = ref('');
    const chatMessages = ref([
      { user: 'Sarah_K', time: '12:34', message: '안녕하세요! 오늘 게임 뭐 하시나요?', avatar: '👩' },
      { user: 'GamerBoy99', time: '12:35', message: '와 그래픽 진짜 좋네요! 👍', avatar: '🎮' },
      { user: 'Luna_Gaming', time: '12:36', message: '방송 잘보고 있어요 재밌어요 😊', avatar: '🌙' },
      { user: 'ProGamer_X', time: '12:37', message: '다음 레벨 언제 가시나요?', avatar: '⚡' },
      { user: 'Streamer_Girl', time: '12:38', message: '우와 보이지!', avatar: '🎯' },
    ]);
    const sendChat = () => {
      if (chatMessage.value.trim() !== '') {
        chatMessages.value.push({
          user: '나',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          message: chatMessage.value,
          avatar: '🧑',
        });
        chatMessage.value = '';
      }
    }
    const stopBroadcast = () => {
      router.push('/stream');
    }
    return {
      isMuted,
      isVideoOn,
      chatMessage,
      chatMessages,
      sendChat,
      stopBroadcast,
    };
  },
});
</script>
