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
        <img :src="user_image"
          style="width: 10dvh; height: 10dvh; float: right;padding: 0 3dvh;right: 0;position: fixed;" />
      </div>
    </nav>
    <button class="menu" @click="showMenu">
      <img type="image/svg+xml" src="./assets/chevron-up-circle.1024x1024.png" style="width: 10svh;height: 10svh;" />
    </button>
    <nav class="sidebar" v-show="isMenuVisible">
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
  /* background: #1b1b1b; */
  background: #ff0000;
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
  position: absolute;
  top: 12svh;
  left: 0;
  transform: translateX(0);
  min-height: 88svh;
  min-width: 15svw;
  background-color: #0055ff;
  animation: manu-animation 1s forwards;
}

.sidebar RouterLink {
  width: 15svw;
  height: 1svh;
}

.sidebar-remove {
  position: absolute;
  top: 12svh;
  left: 0;
  transform: translateX(0);
  min-height: 88svh;
  min-width: 15svw;
  background-color: #0055ff;
  animation: manu-remove-animation 1s forwards;
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

.menu {
  bottom: 1dvh;
  left: 1dvh;
  position: absolute;
  width: 12dvh;
  height: 12dvh;
  background-color: rgb(27, 4, 51);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

@keyframes manu-animation {
  from {
    opacity: 1;
    transform: translateX(-15svw);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes manu-remove-animation {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-15svw);
  }
}
</style>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            isMenuVisible: false,
        };
    },
    methods: {
        showMenu() {
            this.isMenuVisible = !this.isMenuVisible;
            if (this.isMenuVisible) {
                // 添加全局点击事件监听
                document.addEventListener("click", this.handleGlobalClick);
            }
            else {
                // 在菜单关闭时移除全局点击事件监听
                document.removeEventListener("click", this.handleGlobalClick);
            }
        },
        handleGlobalClick(event) {
            // 如果点击事件发生在菜单之外，则关闭菜单
            if (!this.$el.contains(event.target)) {
                this.isMenuVisible = false;
            }
        },
    },
    beforeDestroy() {
        // 在组件销毁前移除全局点击事件监听
        document.removeEventListener("click", this.handleGlobalClick);
    },
    components: { RouterLink }
};

</script>