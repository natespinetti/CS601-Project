<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <a to="#">
      {{ title }}
    </a>
    <svg viewBox="0 0 1030 638" width="10">
      <path
        d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
        fill="#FFF"
      ></path>
    </svg>
    <transition name="fade">
      <div class="sub-menu" v-if="isOpen">
        <div class="menu-item">
          <router-link to="/about/biography">Biography</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/about/pets">Pets</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/about/resume">Resume</router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "about",
  props: ["title"],
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
nav .menu-item svg {
  width: 10px;
  margin-left: 10px;
}
nav .menu-item {
  cursor: pointer;
}

nav .menu-item .sub-menu {
  position: absolute;
  background-color: #011936;
  top: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  border-radius: 0px 0px 8px 8px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>