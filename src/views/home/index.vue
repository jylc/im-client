<template>
  <div>
    <h2>Hello</h2>
    <h3>当前在线人数：{{ onlineCount }}</h3>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

export default {
  data() {
    return {
      onlineCount: 0,
      message: '',
      socket: {},
      stompClient: {},
      isConnected: false,
    }
  },
  methods: {
    initWs() {
      this.socket = new SockJS('http://localhost:9999/ws')
      this.stompClient = Stomp.over(this.socket)

      this.stompClient.connect(
        {},
        frame => {
          console.log('websocket连接成功:' + frame)
          this.isConnected = true

          this.stompClient.subscribe('/status/onlineCount', response => {
            this.onlineCount = response.body
          })
        },
        err => {
          // 连接发生错误时的处理函数
          console.log('websocket连接成功:' + err)
        }
      )
    },
    disconnect() {
      if (this.stompClient) {
        this.stompClient.disconnect()
      }
    },
  },
  mounted() {
    this.initWs()
  },
  beforeDestroy: function() {
    this.disconnect()
  },
}
</script>

<style lang="scss" scoped></style>
