<template>
  <main>
    <div class="degreeContainer">
      <a
        class="degreeButton degreeA"
        @click="
          getDegrees(
            'https://raw.githubusercontent.com/natespinetti/CS601-HW5/main/src/degrees.json'
          )
        "
        >Show Degrees</a
      >
    </div>
  </main>
</template>

<script>
export default {
  name: "CS601_HW5",
  methods: {
    getDegrees: async function (url) {
      try {
        await fetch(url)
          .then((response) => response.json())

          .then((data) => {
            this.getDegreeData(data.data[0].degrees.bachelors.data);
            this.getDegreeData(data.data[0].degrees.gradcertificate.data);
            this.getDegreeData(data.data[0].degrees.masters.data);
          });
      } catch (err) {
        console.log(err);
      }
    },

    getDegreeData: function (obj) {
      const main = document.querySelector("main");

      const contain = document.createElement("div");
      contain.classList.add("degreeContain");
      contain.style.backgroundImage = `url(${obj.img})`;

      const logo = document.createElement("img");
      logo.classList.add("degreeLogo");
      const bgimg = document.createElement("img");
      bgimg.classList.add("degreeBg");
      const line1 = document.createElement("p");
      line1.classList.add("degreeLine1");
      const line2 = document.createElement("p");
      line2.classList.add("degreeLine2");

      const a = document.createElement("a");
      a.classList.add("degreeA");
      const link = document.createTextNode("Check out the program!");
      a.appendChild(link);
      a.href = `${obj.website}`;

      logo.src = `${obj.logo}`;

      if (obj.gpa === "N/A" && obj.honors === "N/A") {
        line1.textContent = `My next program will be a ${obj.type} from ${obj.institution}, I expect to finish in ${obj.date}.`;
        line2.textContent = `I hope to finish at the age of ${obj.age}.`;
      } else {
        line1.textContent = `My first degree was a ${obj.type} from ${obj.institution} in ${obj.date}.`;
        line2.textContent = `I had a GPA of ${obj.gpa}, graduating as ${obj.honors} at the age of ${obj.age}.`;
      }

      const section = document.createElement("section");
      section.classList.add("degreeSection");
      contain.appendChild(section);
      section.appendChild(logo);
      section.appendChild(line1);
      section.appendChild(line2);
      section.appendChild(a);

      main.appendChild(contain);
    },
  },
};
</script>

<style>
.degreeContainer {
  display: flex;
  width: 100%;
}

.degreeSection {
  display: grid;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  border-radius: 50px;
}

.degreeLogo {
  height: 100px;
  justify-self: center;
  border-radius: 25px;
  margin-top: 1rem;
}

.degreeContain {
  border-radius: 50px;
  background-size: cover;
  height: 300px;
  width: 80%;
  margin: auto auto 2rem;
}

.degreeLine1 {
  font-weight: 700;
  margin-bottom: 0;
}

.degreeLine2 {
  margin-top: 0;
}

.degreeLine1,
.degreeLine2 {
  font-size: 1rem;
  color: #fff;
  text-align: center;
  padding: 0 2rem;
  line-height: 1.5;
}

.degreeA {
  background-color: #ec7e2c;
  width: fit-content;
  padding: 0.75rem 1rem;
  border-radius: 25px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  margin: auto auto 1rem;
  transition: 0.3s;
}

.degreeA:hover {
  background-color: #ec522c;
}

.degreeButton {
  width: 80%;
  display: block;
  margin-top: 1rem;
  text-align: center;
  cursor: pointer;
  margin-bottom: 2rem;
}
</style>