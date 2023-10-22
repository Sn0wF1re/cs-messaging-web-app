<template>
  <div id="app">
    <nav>
      <router-link to="/send-message">Send Message</router-link> | 
      <router-link to="/conversation-history">Conversation History</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #6610f2;
}
</style>