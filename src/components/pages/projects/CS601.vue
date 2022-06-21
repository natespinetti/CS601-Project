<template>
  <div>
    <h1>{{ msg }}</h1>

    <div class="intro-card">
      <div class="intro-title">
        <h3>Web Application Development in Vue</h3>
      </div>
    </div>
    <div class="intro-content">
      This course provides an introduction to developing websites and web-based
      applications. Students will create an online portfolio by using a variety
      of foundational web technologies. Client-side languages to be used include
      HTML, CSS, and JavaScript with supporting libraries. A brief introduction
      to interfacing with server-side scripts will also be covered.
    </div>
    <div class="projCards">
      <projectCard
        img="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/vueimg/pokemon.jpg"
        imgalt="Pokemon Card Flip"
        link="/projects/cs601/hw6"
        title="Vue: Show/Hide"
        date="June 21st, 2022"
        desc="Using Vue.js library, provide the following functionality. When you hover over the image it will change from a current image to an earlier one."
      />
      <projectCard
        img="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/vueimg/boston.jpg"
        imgalt="JWU and BU MET"
        link="/projects/cs601/hw5"
        title="JSON and Fetch"
        date="June 14th, 2022"
        desc="Store information about college degrees earned to date and those I am currently working towards. Create a JavaScript program that fetchs and processes JSON data."
      />
      <projectCard
        img="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/vueimg/vue.jpg"
        imgalt="Vue Form Validation"
        link="/projects/cs601/hw4"
        title="Form Validation and Submission"
        date="June 7th, 2022"
        desc="Create an HTML form and use JavaScript to perform client-side validation."
      />
      <projectCard
        img="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/vueimg/ryan%20reynolds.jpg"
        imgalt="Ryan Reynolds Calculator"
        link="/projects/cs601/hw3"
        title="Simple JavaScript Calculator"
        date="May 31st, 2022"
        desc="Write a JavaScript program that uses prompts and alerts to run a calculator."
      />
    </div>
  </div>
</template>
<script>
import projectCard from "@/components/projectCard";
export default {
  name: "cs601",
  data() {
    return {
      msg: "CS601 Projects",
    };
  },
  components: {
    projectCard,
  },
};
</script>

<style scoped>
.intro-card,
.intro-content {
  width: 80%;
  margin: auto;
}
.intro-title {
  margin: 0;
}
.intro-content {
  padding-bottom: 4rem;
}
.projCards {
  grid-template-columns: 1fr 1fr;
  display: grid;
  grid-gap: 50px 20px;
}
.cardWrap:nth-child(odd) {
  grid-column: 1;
}
.cardWrap:nth-child(even) {
  grid-column: 2;
}
</style>