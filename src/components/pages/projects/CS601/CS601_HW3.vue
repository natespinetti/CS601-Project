<template>
  <main class="mainCalc">
    <div class="container">
      <input id="start" type="button" value="START" @click="calc()" />
      <input id="about" type="button" value="VIEW ABOUT" @click="about()" />
    </div>
  </main>
</template>

<script>
export default {
  name: "CS601_HW3",
  methods: {
    calc: function () {
      alert("Welcome!"); // Welcome Message
      let person = prompt("Please enter your name", "Ryan Reynolds"); // Prompt for users name
      alert("Welcome to a calculator " + person + "!"); // Personalized Welcome Message
      let nums1 = +prompt("Please enter your first number", "1"); // Prompt for first number
      let nums2 = +prompt("Please enter your second number", "2"); // Prompt for second number
      add();
      confirmCalc();

      var x = document.getElementById("about");
      var y = document.getElementById("start");
      var z = document.getElementsByClassName("container");
      x.style.display = "inline";
      x.style.width = "400px";
      y.style.width = "400px";

      function add() {
        const sum = nums1 + nums2; // add two numbers
        alert("The sum of your two numbers is: " + sum); // display the sum
        if (sum > 10) {
          alert("That is a big number."); // alert for big number
        } else {
          alert("That is a small number."); // alert for small number
        }
      }

      function confirmCalc() {
        let confirmAction = confirm("Would you like to add 2 more numbers?");
        if (confirmAction) {
          let nums1 = +prompt("Please enter your first number", "1"); // Prompt for first number
          let nums2 = +prompt("Please enter your second number", "2"); // Prompt for second number
          add();
          confirmCalc();
        } else {
          alert("Thank you for using the calculator " + person + "!");
        }
      }
    },
    about: function () {
      window.location.href = "#/about/biography";
    },
  },
};
</script>

<style scoped>
.mainCalc {
  text-align: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  height: 100vh;
}

.container {
  position: absolute;
  top: 50%;
  left: 25%;
}

#about {
  display: none;
}

input {
  padding: 16px 42px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
  line-height: 1.25;
  background: #FC6E51;
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: 700;
  transition: 0.3s;
  box-shadow: 3px 3px 0 black;
  transform: skewX(-10deg);
  width: 700px;
}

input:focus,
input:hover {
  background: darken(#FC6E51, 30%);
  cursor: pointer;
  box-shadow: 6px 6px 0 black;
  transform: skewX(-10deg);
}
</style>
