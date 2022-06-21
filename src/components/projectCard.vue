<template>
  <div
    class="cardWrap"
    @mouseover="isHovering = true"
    @mouseout="isHovering = false"
    :class="{ cardHover: isHovering }"
  >
    <router-link :to="link">
      <div class="card">
        <div class="shadow"></div>
        <div class="imgWrap">
          <img :src="img" :alt="imgalt" />
        </div>
        <div class="cardInfo">
          <h2>{{ title }}</h2>
          <p class="date">
            <b>{{ date }}</b>
          </p>
          <p class="desc">{{ desc }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "projectCard",
  props: ["img", "imgalt", "link", "title", "date", "desc"],
  data() {
    return {
      isHovering: false,
    };
  },
};
</script>

<style scoped>
.cardWrap {
  width: 400px;
  height: 600px;
  margin: auto;
  border-radius: 20px;
  box-shadow: 0px 20px 20px 10px rgb(0 0 0 / 10%);
  overflow: hidden;
  text-align: left;
  transition: 0.3s;
}

h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  text-decoration: underline wavy #FFD131 3px;
}

.date {
  font-size: 1.1rem;
}

.desc {
  overflow-wrap: anywhere;
}

a {
  text-decoration: none;
  color: #fff;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  cursor: pointer;
  position: relative;
}

.imgWrap {
  height: 60%;
}

.shadow {
  background: linear-gradient(
    to bottom,
    rgba(1, 25, 54, 0),
    rgba(1, 25, 54, 1)
  );
  position: absolute;
  z-index: 1;
  bottom: 0;
  height: 120px;
  width: 100%;
  transition: 0.3s;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0 0;
}

.cardInfo {
  overflow: hidden;
  height: 100%;
  background-color: #011936;
  transform: translateY(0%);
  transition: 0.7s;
  padding: 1rem 2rem;
}
.cardHover .card .cardInfo {
  transform: translateY(-20%) !important;
  transition: 1s;
}

.cardHover.cardWrap {
  box-shadow: 0px 10px 20px 0px rgb(0 0 0 / 30%);
}
.cardHover .shadow {
  height: 0px;
  transition: 0.3s;
}
</style>