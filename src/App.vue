<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
</script>

<template>
  <div class="background suavization-animation">
    <div class="navbar">
      <div class="navbar-content">
        <a class="navbar-item" href="/"><img class="main-icon" src="/src/assets/icons/rickpedia.svg"
                                                          alt="Icone Rickepedia"></a>
        <a class="navbar-item" href="#" @click="router.push({name: 'CharacterList'})">Characters</a>
      </div>
    </div>
    <div class="content column">
      <router-view></router-view>
    </div>
    <div class="footer">
      <p>Developed by Maycon Liborio -
        <a target="_blank" href="https://github.com/mayconliborio">Github</a>
        - <a target="_blank" href="https://www.linkedin.com/in/mayconliborio/">Linkedin</a>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
p {
  margin: 0 !important;
  padding: 0;
}

.main-icon {
  padding: 6px 0;
}

.background {
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.content {
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 80px;
}

.navbar, .footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background: #FFFFFF;
  box-shadow: -2px 0 8px 2px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.content {
  height: calc(100% - 100px);
}

.navbar {
  position: fixed;
  top: 0;
}

.footer {
  height: 60px;
  position: fixed;
  bottom: 0;
}

.navbar-content {
  display: flex;
  width: 80%;
  align-items: center;
  padding: 0;
  justify-content: space-between;
}

.navbar-item {
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
  color: black;
  font-family: Karla, sans-serif;
  text-decoration: none;
}

@media screen and (max-width: 400px) {
  .content, .navbar-content {
    width: 90%;
  }
}
</style>
