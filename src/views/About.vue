<template>
  <div class="about">
    <h1>恭喜你已经开启一段新的旅程~</h1>
    <van-steps direction="vertical" active="3">
      <van-step>
        <h3>找到此库</h3>
        <p>{{ date }}</p>
      </van-step>
      <van-step>
        <h3>Git Clone</h3>
        <p>{{ date }}</p>
      </van-step>
      <van-step>
        <h3>yarn install</h3>
        <p>{{ date }}</p>
      </van-step>
      <van-step>
        <h3>yarn serve</h3>
        <p>{{ date }}</p>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      date: '2020-03-29',
    }
  },
}
</script>

<style></style>
