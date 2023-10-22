<template>
    <div>
      <div v-for="entry in conversationHistory" :key="entry._id">
        <div class="entry">
          <div class="message" v-if="entry.isCustomer">Message: {{ entry.body }}</div>
          <div class="message" v-else>Response: {{ entry.body }}</div>
          <div class="timestamp">{{ entry.timestamp }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const userId = '6533ac2d7abc25bc678085b7';
  const conversationHistory = ref([]);
  
  onMounted(async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/conversation-history/${userId}`);
  
      if (response.status === 200) {
        conversationHistory.value = response.data;
      } else {
        console.error('Failed to fetch conversation history');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  });
  </script>

  <style scoped>
  .message, .response {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.message {
  background-color: #f0f0f0;
}

.timestamp {
  font-size: 0.8em;
  color: #fff;
}
</style>
  