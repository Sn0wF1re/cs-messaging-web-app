<template>
  <div class="sendMessage">
    <h2>Send a Message</h2>
    <article class="userId">
      <label for="userId">User ID</label>
      <textarea v-model="userId" rows="2"></textarea>
    </article>
    <article class="message">
      <label for="message">Message</label>
      <textarea v-model="message" rows="4"></textarea>
    </article>
    <button @click.prevent="sendMessage">Send</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const message = ref('');
const userId = ref('');

const sendMessage = async () => {
  try {
    const response = await axios.post(`http://localhost:3000/api/messages`, {
      message: message.value,
    });

    if (response.status === 201) {
      // Message sent successfully, update UI or display a success message.
      console.log('Message sent successfully');
    } else {
      console.error('Message not sent');
    }
    message.value = '';
    userId.value = '';
  } catch (error) {
    console.error('An error occurred:', error.response.data);
  }
};
</script>

<style scoped>
.sendMessage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
}

article {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 1rem;
}

label {
  color: #fff;
}
</style>
