<template>
  <div>
    <h1>{{ msg }}</h1>

    <section class="sec1">
      <img
        class="left"
        width="200px"
        alt="The handsomest of gentleman portrayed in black and white"
        src="https://mlz8gsioq8rv.i.optimole.com/RcvqSxE-JRxmGLeG/w:1024/h:1024/q:auto/https://nathanspinetti.com/wp-content/uploads/2020/05/box.jpg"
      />
      <div class="right">
        <p>
          My name is Nathan Spinetti, and I am enrolled in the Grad Certificate
          in Web Application Development. I do hope one day to enroll in the
          Master's program, but not just yet. This is my 2nd course, I started
          with Data Structures and Algorithms in Java. I enrolled in this
          program in hopes to further my knowledge in frameworks and backend
          work, so I am very excited to get started in these core classes.
        </p>
        <p>
          <router-link to="/projects/cs601/hw5">Click here</router-link> to
          checkout the degrees I have and am going for!
        </p>
      </div>
    </section>
    <section class="sec2">
      <div class="sec2inner">
        <div class="left">
          <h3>Professional Development</h3>
          <p>
            I have a bachelors in Graphic Design with a focus in Web Design, and
            have worked for the past 2 years as a Designer/Developer. I just
            started a new job in May as a
            <a href="https://www.workhuman.com/" target="_blank"
              >Jr. Web Developer</a
            >
            and am ready to dive into the technical side of things with the hope
            of becoming a Full Stack Developer one day. With this course
            specifically I am aiming to get a better grasp of Javascript and
            start off in Vue.<br /><br />I have been primarily working on
            <a href="https://www.workhumanlive.com/"
              >Workhuman<sup>®</sup> Live.</a
            >
            On WHL, I have been developing the upcoming Europe event. I also
            have a big project called Workhuman Spotlight on the main
            <a href="https://www.workhuman.com/">Workhuman</a> website coming
            up.
          </p>
        </div>
        <img
          class="right"
          width="200px"
          alt="Workhuman Live"
          src="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/WHL.jpg"
        />
      </div>
    </section>
    <section class="sec3">
      <img
        class="left"
        width="200px"
        alt="The handsomest of gentleman portrayed in black and white"
        src="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/oliver-01.jpg"
      />
      <div class="right">
        <h3>Family and Interests</h3>
        <p>
          I live in Massachusetts with my family, 3 dogs, and my cat. My dogs
          names are Baxter, Bentley, and we have a 15 week old puppy Oliver. And
          my cats name is Felix. When I am not working or studying, I am either
          travelling or hanging in at home. In the past few years I have gone to
          Italy, done a road trip from Chicago to Rhode Island, and a road trip
          from Chicago to Florida. I also just recently went to Florida where we
          hung out at the beach and went to Disney! When I am hanging in at home
          I like to play games with friends and spend time with my pets and
          family.
        </p>
        <p>
          <router-link to="/about/pets">Click here</router-link> to look at my
          pets!
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "biography",
  data() {
    return {
      msg: "About Nathan Spinetti",
    };
  },
};
</script>

<style scoped>
section {
  display: flex;
  text-align: left;
  grid-gap: 50px;
  align-items: center;
  width: 90%;
  margin: auto;
  padding: 4rem 0;
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
.sec2 {
  background-color: #f6f6f6;
  width: 100%;
}
.sec2inner {
  grid-gap: 50px;
  align-items: center;
  display: flex;
  width: 90%;
  margin: auto;
}
img {
  border-radius: 20px;
  box-shadow: 0px 20px 20px 10px rgb(0 0 0 / 10%);
}
</style>