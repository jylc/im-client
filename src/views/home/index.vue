<template>
  <div>
    <h2>这里是聊天室首页</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { sendMessage } from '@/api/chat.js'

export default {
  data() {
    return {
      message: '',
    }
  },
  mounted() {
    sendMessage('/chat/send').then(resp => {
      this.message = resp
    })
  },
}
</script>

<style lang="scss" scoped></style>
