<template>
  <div class="main">
    <nav>
      <div class="image-container">
        <img class="logo" src="/HS-NO-BG.png" alt="we logo" />
        <RouterLink to="/">
          <h4 class="title-text">
            <color style="color:rgb(0, 195, 255)">Him</color>
            <color style="color:yellow">Server</color>
          </h4>
        </RouterLink>
        <div class="topbar">
          <p>{{ username }}Thomas10409</p>
          <p>{{ coin }}100 HC</p>
        </div>
        <img :src="user_image" style="width: 10dvh; height: 10dvh; float: right;padding: 0 3dvh;right: 0;position: fixed;"/>
      </div>
    </nav>
    <nav class="sidebar">
      <ul type="square">
        <li>
          <RouterLink to="/">首頁</RouterLink>
        </li>
        <li>
          <RouterLink to="/CreateServer">創建伺服器</RouterLink>
        </li>
        <li>
          <RouterLink to="/AFK">AFK農場</RouterLink>
        </li>
        <li>
          <RouterLink to="/Redeem">貸幣兌換</RouterLink>
        </li>
        <li>
          <RouterLink to="/Rules">使用條款</RouterLink>
        </li>
        <li>
          <a>前往面板</a>
        </li>
        <li>
          <RouterLink to="/Settings">設定</RouterLink>
        </li>
      </ul>
    </nav>
    <div class="index">

    </div>
  </div>
</template>


<style scoped>
.image-container {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 12svh;
  max-height: 12svh;
  width: 100%;
  background: #1b1b1b;
  z-index: 9999;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.logo {
  text-align: left;
  height: 10svh;
  width: 10svh;
  padding: 10px;
  will-change: filter;
  transition: filter 200ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em rgb(0, 234, 255, 1));
}

@font-face {
    font-family: 'logo-title';
    src: url('./Fonts/Caveat-VariableFont_wght.ttf')
}

.title-text {
    font-family: 'title';
    text-align: center;
    margin-left: 0;
    font-size: 4svh;
    color: #ffffff;
}

.main {
  display: block;
  max-width: 100svw;
  width: 100svw;
}

.topbar {
  position: absolute;
  display: flex;
  min-height: 15svh;
  padding: 2svh;
  display: block;
  text-align: left;
  min-height: 15svh;
  right: 13svh;
}

.sidebar {
  min-height: 100svh;
  min-width: 15svw;
}

nav {
  background-color: rgb(13, 2, 25);
}

li {
  margin: 1em;
}

li a {
  color: rgb(229, 222, 238);
}

.index {
  min-width: 80svw;
}

</style>

<script setup>
import { RouterLink } from 'vue-router'
</script>