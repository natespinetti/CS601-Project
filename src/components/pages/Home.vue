<template>
  <div>
    <div class="herocontainer">
      <div class="hero">
        <h1>
          When Design<br />
          meets Development...
        </h1>
        <p>
          You get someone on the track of <br />becoming a Full Stack Developer.
        </p>
        <div class="button">
          <router-link class="fill" to="/contact">Contact me</router-link>
        </div>
        <div class="button">
          <router-link class="outline" to="/projects/CS601"
            >Projects</router-link
          >
        </div>
      </div>
    </div>
    <section class="sec1">
      <img
        class="left"
        width="200px"
        alt="The handsomest of gentleman portrayed in black and white"
        src="https://mlz8gsioq8rv.i.optimole.com/RcvqSxE-JRxmGLeG/w:1024/h:1024/q:auto/https://nathanspinetti.com/wp-content/uploads/2020/05/box.jpg"
      />
      <div class="right">
        <p>
          My name is Nathan Spinetti, and I am a Web Developer at Workhuman. I
          also provide design and development work for multiple clients while
          attending Boston University for my Graduate Certificate in Web
          Application Development.
        </p>
        <div class="button">
          <router-link class="outline" to="/about/biography"
            >About me</router-link
          >
        </div>
      </div>
    </section>
    <section class="sec2">
      <projectCard
        img="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/vueimg/pokemon.jpg"
        imgalt="Vue.js Projects"
        link="/projects/cs601"
        title="Vue.js Projects"
        date="June 21st, 2022"
        desc="These projects are from my Web Application Development in Vue course taken in 2022. In this course, we were taught the fundamentals of JavaScript, JSON, and Vue."
      />
      <projectCard
        img="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/javaimg/bankequeue.jpg"
        imgalt="Java Projects"
        link="/projects/cs526"
        title="Java Projects"
        date="April 26th, 2022"
        desc="This collection of projects was from my Data Structures and Algorithms in Java course taken in 2022. In this course, we were taught the fundamentals of Java and its data structures."
      />
      <projectCard
        img="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/questionblock.jpg"
        imgalt="Other"
        link="/"
        title="Coming Soon"
        date="TBD"
        desc="This is a collection of work including design and development work from clients and previous employers."
      />
    </section>
    <div id="contact-form" class="contact-form">
      <h2 class="contact-form_title">Contact Form</h2>
      <div class="separator"></div>

      <form class="form" method="post" action="mailto:nate.spinetti@gmail.com">
        <input
          name="name"
          placeholder="Name"
          type="text"
          required
          autocomplete="off"
        />
        <input
          required
          name="email"
          placeholder="Email"
          type="email"
          autocomplete="off"
        />
        <textarea
          required
          name="message"
          rows="4"
          placeholder="Message"
        ></textarea>
        <button class="button">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import projectCard from "@/components/projectCard";
export default {
  name: "Home",
  components: {
    projectCard,
  },
};
</script>

<style scoped>
.herocontainer {
  width: 100%;
  background-color: #f6f6f6;
  background-image: url("https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/babishBG.png");
  background-size: 600px;
  background-repeat: no-repeat;
  background-position: right;
}
.hero {
  width: 80%;
  margin: auto;
  padding: 2rem;
  text-align: left;
}
.hero p {
  font-size: 2rem;
}
h1 {
  text-decoration: underline wavy #FFD131 3px;
  font-size: 3rem;
}
.button {
  display: inline-block;
  padding-right: 20px;
  font-weight: 600;
  padding-top: 1rem;
  margin: 0 0 2rem 0;
}

.fill,
.outline {
  text-decoration: none;
  border-radius: 25px;
  padding: 10px 25px;
  transition: 0.5s;
  text-decoration: #FFD131;
}
.fill:hover,
.outline:hover {
  opacity: 0.9;
}
.fill:hover {
  color: #FFD131;
}
.outline:hover {
  text-decoration: underline wavy #FFD131 3px;
}
.fill {
  background-color: #011329;
  color: #fff;
}
.outline {
  color: #011329;
  border: 2px solid #011329;
}
.sec1 {
  display: flex;
  text-align: left;
  grid-gap: 50px;
  align-items: center;
  width: 90%;
  margin: auto;
  padding: 6rem 0;
}
.sec1 img {
  float: left;
}
.left {
  float: left;
}
.right {
  float: right;
}
.right p {
  float: left !important;
}
img {
  border-radius: 20px;
  box-shadow: 0px 20px 20px 10px rgb(0 0 0 / 10%);
}
.sec2 {
  grid-template-columns: repeat(3, auto);
  display: grid;
  grid-gap: 50px;
  width: 90%;
  margin: auto;
  padding: 4rem 0;
}
.contact-form {
  width: 90%;
  margin: auto;
  padding-top: 2rem;
}
.contact-form h2 {
  text-decoration: underline wavy #FFD131 3px;
}
.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}
.contact-form_title {
  color: #333;
  text-align: left;
  font-size: 28px;
}
.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  border: solid 1px #e8e8e8;
  padding: 10px 7px;
  margin-bottom: 15px;
  outline: none;
}
.contact-form textarea {
  resize: none;
}
.contact-form .button {
  transition: 0.5s;
  background: #011329;
  border: 0px;
  color: white;
  cursor: pointer;
  padding: 10px 50px;
  text-align: center;
  text-transform: uppercase;
}
.contact-form .button:hover {
  opacity:0.9;
}
.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border-radius: 3px;
}
</style>
