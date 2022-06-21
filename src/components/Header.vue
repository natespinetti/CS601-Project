<template>
  <header>
    <nav>
      <router-link to="/">
        <img
          src="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/NS%20Logo.png"
        />
      </router-link>
      <div class="main-menu">
        <div class="menu-item"><router-link to="/">Home</router-link></div>
        <Projects title="Projects" />
        <About title="About" />
        <div class="menu-item">
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Projects from "../components/pages/projects/Projects";
import About from "../components/pages/about/About";
export default {
  name: "Header",
  components: {
    Projects,
    About,
  },
};
</script>

<style>
header {
  width: 100vw;
  background-color: #011329;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  font-weight: 500;
}

nav a img,
.main-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

nav .menu-item {
  color: #FFF;
  padding: 25px 40px;
  position: relative;
  text-align: center;
  border-bottom: 5px solid transparent;
  display: flex;
  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: #011936;
  border-bottom-color: #FFD131;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}

nav a img {
  width: 60px;
}
</style>
