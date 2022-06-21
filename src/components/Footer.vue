<template>
  <footer>
    <nav>
      <router-link to="/">
        <img
          src="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/NS%20Logo.png"
        />
      </router-link>
      <div class="main-menu">
        <div class="menu-item"><router-link to="/">Home</router-link></div>
        <div class="menu-item">
          <router-link to="/projects/CS601">Vue.js</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/projects/CS526">Java</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/about/biography">Biography</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/about/pets">Pets</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/about/resume">Resume</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  width: 100vw;
  background-color: #011329;
  bottom: 0;
  z-index: 2;
  margin-top: 5rem;
}

.main-menu {
  grid-template-rows: 1fr 1fr;
  display: grid;
  width: 90%;
  height: 100%;
  padding: 1rem;
}

.menu-item:nth-child(odd) {
  grid-row: 1;
}
.menu-item:nth-child(even) {
  grid-row: 2;
}

nav .menu-item {
  color: #FFF;
  padding: 12px 50px;
}
nav .menu-item.active,
nav .menu-item:hover {
  border-bottom-color: transparent;
}

nav a img {
  width: 100px;
}
</style>
