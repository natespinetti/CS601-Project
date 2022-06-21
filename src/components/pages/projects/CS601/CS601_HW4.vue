<template>
  <div class="container">
    <form action="https://bucs601.com/submit.php" method="POST">
      <h2>Fill out the form</h2>
      <label for="firstName"><b>First name</b></label
      ><br />
      <input
        type="text"
        id="firstName"
        name="firstName"
        required
        placeholder="Enter first name"
        minlength="2"
        pattern="[a-zA-Z]+"
        size="30"
      /><br /><br />
      <label for="lastName"><b>Last name</b></label
      ><br />
      <input
        type="text"
        id="lastName"
        name="lastName"
        required
        placeholder="Enter last name"
        minlength="2"
        pattern="[a-zA-Z]+"
        size="30"
      /><br /><br />
      <label for="facilitator"><b>Facilitator</b></label
      ><br />
      <input
        type="text"
        id="facilitator"
        name="facilitator"
        required
        placeholder="Enter Fazil, Laura, or Harsh"
        pattern="^(Fazil|Laura|Harsh).*$"
        size="30"
      /><br /><br />
      <p>Which framework do you favor?</p>
      <input
        type="radio"
        id="framework1"
        name="framework"
        value="React"
        checked
        @click="otherCheck()"
      />
      <label for="framework1">React</label><br />
      <input
        type="radio"
        id="framework2"
        name="framework"
        value="Angular"
        @click="otherCheck()"
      />
      <label for="framework2">Angular</label><br />
      <input
        type="radio"
        id="framework3"
        name="framework"
        value="Vue"
        @click="otherCheck()"
      />
      <label for="framework3">Vue</label><br />
      <input
        type="radio"
        id="framework4"
        name="framework"
        value="Other"
        @click="otherCheck()"
      />
      <label for="framework4">Other</label><br /><br />
      <label id="framework5-1" for="framework5">Which Framework?</label>
      <input type="text" id="framework5" name="framework" />
      <div class="cols">
        <p>What browsers do you use?<br /><i>Select all that apply</i></p>
        <div class="col1">
          <input
            type="checkbox"
            id="browser1"
            name="browser"
            value="Google Chrome"
          />
          <label for="browser1">Google Chrome</label><br />
          <input
            type="checkbox"
            id="browser2"
            name="browser"
            value="Mozilla Firefox"
          />
          <label for="browser2">Mozilla Firefox</label><br />
        </div>
        <div class="col2">
          <input type="checkbox" id="browser3" name="browser" value="Safari" />
          <label for="browser3">Safari</label><br />
          <input
            type="checkbox"
            id="browser4"
            name="browser"
            value="Microsoft Edge"
          />
          <label for="browser4">Microsoft Edge</label><br />
        </div>
      </div>
      <br /><br />
      <button type="submit" onclick="checkFields();">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      msg: "Contact Me",
    };
  },
  methods: {
    otherCheck: function () {
      let a = document.getElementById("framework1");
      let b = document.getElementById("framework2");
      let c = document.getElementById("framework3");

      let x = document.getElementById("framework4");
      let y = document.getElementById("framework5");
      let z = document.getElementById("framework5-1");

      if (x.checked) {
        z.style.visibility = "visible";
        y.style.visibility = "visible";
      } else if (a.checked || b.checked || c.checked) {
        z.style.visibility = "hidden";
        y.style.visibility = "hidden";
      }
    },

    checkFields: function () {
      let fN = document.getElementById("firstName");
      let lN = document.getElementById("lastName");
      let facN = document.getElementById("facilitator");

      let fName = fN.value.toString();
      let lName = lN.value.toString();
      let facName = facN.value.toString();

      let error = document.createElement("img");
      error.src = "../CS601_HW4_Spinetti/img/error.svg";
      error.classList.add("errimg");

      let letters = /^[a-zA-Z]+$/;
      let facNames = ["Fazil", "Laura", "Harsh"];

      if (fName == 0 || fName.length < 2 || fName.match(letters) == false) {
        alert("Please enter a first name with 2 or more alphabetical letters.");
        fN.classList.add("error");
        fN.after(error);
        return false;
      } else if (
        lName == 0 ||
        lName.length < 2 ||
        lName.match(letters) == false
      ) {
        alert("Please enter a last name with 2 or more alphabetical letters.");
        lN.classList.add("error");
        lN.after(error);
        return false;
      } else if (
        facName !== facNames[0] &&
        facName !== facNames[1] &&
        facName !== facNames[2]
      ) {
        alert("Please enter a valid Facilitator name.");
        facN.classList.add("error");
        facN.after(error);
        return false;
      } else {
        alert(fName + " " + lName + " has successfully submitted the form.");
        fN.classList.add("success");
        lN.classList.add("success");
        facN.classList.add("success");
        return true;
      }
    },
  },
};
</script>

<style scoped>
* {
  text-align: left;
  align-items: center;
}
#framework5,
#framework5-1 {
  visibility: hidden;
}

.cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.cols p {
  grid-column: 1 / -1;
}

.col1 {
  grid-column: 1;
}

.col2 {
  grid-column: 2;
}

p {
  font-weight: 700;
}

p i {
  font-weight: 400;
  color: #777;
  font-size: 12px;
}

body {
  background-color: #e5e5e5;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  display: flex;
}

.container {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  width: 400px;
  margin: auto;
  margin-top: 2rem;
}

form {
  padding: 30px 40px;
}

form button {
  cursor: pointer;
  background-color: #ec7e2c;
  border: 2px solid #ec7e2c;
  border-radius: 4px;
  color: #fff;
  padding: 10px;
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  transition: 0.3s;
  text-align: center;
}

form button:hover {
  background-color: #f09048;
}

.error {
  border: 2px solid red;
}

.success {
  border: 2px solid green;
}

.errimg {
  width: 20px;
  vertical-align: middle;
  padding-left: 5px;
}
</style>