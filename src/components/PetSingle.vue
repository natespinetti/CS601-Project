<template>
  <section
    @mouseover="isHovering = true"
    @mouseout="isHovering = false"
    :class="{ hovering: isHovering }"
  >
    <img :src="img" :alt="imgalt" />
    <div class="description">
      <h3>
        {{ name }}
      </h3>
      <p>
        {{ name }} is a {{ breed }} that weighs {{ weight }}. He is
        {{ age }} and {{ quirk }}.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "PetSingle",
  props: ["img", "imgalt", "name", "weight", "age", "breed", "quirk"],
  data() {
    return {
      isHovering: false,
    };
  },
};
</script>

<style scoped>
.hovering {
  box-shadow: 0px 20px 20px 10px rgb(0 0 0 / 10%);
  border-radius: 20px;
}

section {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 50px;
  margin: auto;
  width: 90%;
  padding: 2rem 1rem;
  transition: 0.3s;
}

img {
  border-radius: 20px;
  grid-column: 1;
  width: 100%;
  box-shadow: 0px 20px 20px 10px rgb(0 0 0 / 10%);
}

.description {
  grid-column: 2;
  text-align: left;
  align-self: center;
}

h3 {
  text-decoration: underline wavy #FFD131 3px;
  font-size: 2rem;
  margin-bottom: 0;
}
</style>
