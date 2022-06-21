<template>
  <section>
    <div class="about">
      <img
        :src="photoHover"
        @mouseover="hover = true"
        @mouseout="hover = false"
        class="left"
        width="200px"
        alt="Nathan Spinetti, Developer and Designer"
      />
      <p>Get in touch with me for all of your development and design needs!</p>
      <p>
        I work full time as a web developer and provide design and development
        support for multiple clients.
      </p>
    </div>
    <div id="contact-form" class="contact-form">
      <h1 class="contact-form_title">Contact Form</h1>
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
  </section>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      photo:
        "https://mlz8gsioq8rv.i.optimole.com/RcvqSxE-JRxmGLeG/w:1024/h:1024/q:auto/https://nathanspinetti.com/wp-content/uploads/2020/05/box.jpg",
      logo:
        "https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/NS%20Logo.png",
      hover: false,
    };
  },
  computed: {
    photoHover() {
      if (this.hover == true) {
        return this.logo;
      } else {
        return this.photo;
      }
    },
  },
};
</script>

<style scoped>
section {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 50px;
  width: 90%;
  margin: auto;
  padding-top: 2rem;
  height: 65vh;
}
.contact-form {
  grid-column: 2;
}
.about {
  grid-column: 1;
}
img {
  border-radius: 50px;
  box-shadow: 0px 20px 20px 10px rgb(0 0 0 / 10%);
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
