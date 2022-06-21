<template>
  <div class="battle-scene">
    <div class="scene scene--card">
      <div
        class="card"
        @click="
          cardOne == 'start' ? (cardOne = 'flipped') : (cardOne = 'start'),
            (showSpace = !showSpace)
        "
        v-bind:class="{
          flipme: cardOne == 'flipped',
          showSpace: showSpace == 'showSpace',
        }"
      >
        <div class="card__face card__face--front">
          <img
            :src="torterraHover"
            @mouseover="hover1 = true"
            @mouseleave="hover1 = false"
          />
          <p v-if="hover1">Click to see me!</p>
          <h2>Torterra</h2>
          <h3 v-if="!hover1">Ability: Shell Armor</h3>
        </div>
        <div class="card__face card__face--back">
          <img
            :src="turtwigHover"
            @mouseover="hover5 = true"
            @mouseleave="hover5 = false"
          />
          <p v-if="hover5">Click to see me!</p>
          <h2>Turtwig</h2>
          <h3 v-if="!hover5">Ability: Overgrow</h3>
        </div>
      </div>
      <div
        class="card"
        @click="
          cardTwo == 'start' ? (cardTwo = 'flipped') : (cardTwo = 'start')
        "
        v-bind:class="{ flipme: cardTwo == 'flipped' }"
      >
        <div class="card__face card__face--front">
          <img
            :src="gengarHover"
            @mouseover="hover2 = true"
            @mouseleave="hover2 = false"
          />
          <p v-if="hover2">Click to see me!</p>
          <h2>Gengar</h2>
          <h3 v-if="!hover2">Ability: Cursed Body</h3>
        </div>
        <div class="card__face card__face--back">
          <img
            :src="gastlyHover"
            @mouseover="hover6 = true"
            @mouseleave="hover6 = false"
          />
          <p v-if="hover6">Click to see me!</p>
          <h2>Gastly</h2>
          <h3 v-if="!hover6">Ability: Levitate</h3>
        </div>
      </div>
      <div
        class="card"
        @click="
          cardThree == 'start' ? (cardThree = 'flipped') : (cardThree = 'start')
        "
        v-bind:class="{ flipme: cardThree == 'flipped' }"
      >
        <div class="card__face card__face--front">
          <img
            :src="blastoiseHover"
            @mouseover="hover3 = true"
            @mouseleave="hover3 = false"
          />
          <p v-if="hover3">Click to see me!</p>
          <h2>Blastoise</h2>
          <h3 v-if="!hover3">Ability: Rain Dish</h3>
        </div>
        <div class="card__face card__face--back">
          <img
            :src="squirtleHover"
            @mouseover="hover8 = true"
            @mouseleave="hover8 = false"
          />
          <p v-if="hover8">Click to see me!</p>
          <h2>Squirtle</h2>
          <h3 v-if="!hover8">Ability: Torrent</h3>
        </div>
      </div>
      <div
        class="card"
        @click="
          cardFour == 'start' ? (cardFour = 'flipped') : (cardFour = 'start')
        "
        v-bind:class="{ flipme: cardFour == 'flipped' }"
      >
        <div class="card__face card__face--front">
          <img
            :src="mewtwoHover"
            @mouseover="hover4 = true"
            @mouseleave="hover4 = false"
          />
          <p v-if="hover4">Click to see me!</p>
          <h2>Mewtwo</h2>
          <h3 v-if="!hover4">Ability: Pressure</h3>
        </div>
        <div class="card__face card__face--back">
          <img
            :src="mewHover"
            @mouseover="hover7 = true"
            @mouseleave="hover7 = false"
          />
          <p v-if="hover7">Click to see me!</p>
          <h2>Mew</h2>
          <h3 v-if="!hover7">Ability: Synchronize</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardOne: "start",
      cardTwo: "start",
      cardThree: "start",
      cardFour: "start",
      torterra:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",
      turtwig:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
      gastly:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
      gengar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
      blastoise:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      squirtle:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      mewtwo:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
      mew:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
      grass: {
        backgroundImage:
          "url(https://raw.githubusercontent.com/natespinetti/CS601-HW6/main/img/Pokemon%20Fight.jpg)",
      },
      ghost: {
        backgroundImage:
          "url(https://raw.githubusercontent.com/natespinetti/CS601-HW6/main/img/ghost-bg.jpg)",
      },
      psychic: {
        backgroundImage:
          "url(https://raw.githubusercontent.com/natespinetti/CS601-HW6/main/img/space-fight.png)",
      },
      water: {
        backgroundImage:
          "url(https://raw.githubusercontent.com/natespinetti/CS601-HW6/main/img/water-fight.png)",
      },
      showScene: false,
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      hover5: false,
      hover6: false,
      hover7: false,
      hover8: false,
    };
  },

  computed: {
    torterraHover() {
      if (this.hover1 == true) {
        return this.turtwig;
      } else {
        return this.torterra;
      }
    },
    gengarHover() {
      if (this.hover2 == true) {
        return this.gastly;
      } else {
        return this.gengar;
      }
    },
    blastoiseHover() {
      if (this.hover3 == true) {
        return this.squirtle;
      } else {
        return this.blastoise;
      }
    },
    mewtwoHover() {
      if (this.hover4 == true) {
        return this.mew;
      } else {
        return this.mewtwo;
      }
    },
    turtwigHover() {
      if (this.hover5 == true) {
        return this.torterra;
      } else {
        return this.turtwig;
      }
    },
    gastlyHover() {
      if (this.hover6 == true) {
        return this.gengar;
      } else {
        return this.gastly;
      }
    },
    mewHover() {
      if (this.hover7 == true) {
        return this.mewtwo;
      } else {
        return this.mew;
      }
    },
    squirtleHover() {
      if (this.hover8 == true) {
        return this.blastoise;
      } else {
        return this.squirtle;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap");

* {
  font-family: "Roboto Mono", monospace;
}

body {
  background-image: url("https://raw.githubusercontent.com/natespinetti/CS601-HW6/main/img/pokemon-pattern.jpg");
}

.scene {
  width: 400px;
  height: 600px;
  margin: auto;
  perspective: 600px;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  margin: 15px 0;
}

.battle-scene {
  background-image: url("https://raw.githubusercontent.com/natespinetti/CS601-HW6/main/img/Pokemon%20Fight.jpg");
  margin: 0;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 25px;
  margin-top: 8rem;
}

h2 {
  font-weight: 700;
  font-size: 1rem;
  margin-top: 0;
}

h3,
p {
  font-weight: 500;
  font-size: 0.8rem;
}

.card:nth-child(0) {
  grid-column: 1;
  grid-row: 1;
}

.card:nth-child(1) {
  grid-column: 2;
  grid-row: 1;
}

.card:nth-child(2) {
  grid-column: 1;
  grid-row: 2;
}

.card:nth-child(3) {
  grid-column: 2;
  grid-row: 2;
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 1.15;
  color: black;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  backface-visibility: hidden;
  border-radius: 15px;
}

img {
  margin-top: 15px;
  width: 120px;
  height: auto;
}

.card:nth-child(even) .card__face--front,
.card:nth-child(even) .card__face--back {
  background-image: url("https://raw.githubusercontent.com/natespinetti/CS601-HW6/main/img/cardspsychic.png");
  background-size: 175px;
  background-repeat: no-repeat;
}

.card:nth-child(1) .card__face--front,
.card:nth-child(1) .card__face--back {
  background-image: url("https://raw.githubusercontent.com/natespinetti/CS601-HW6/main/img/grasscards1.png");
  background-size: 175px;
  background-repeat: no-repeat;
}

.card:nth-child(3) .card__face--front,
.card:nth-child(3) .card__face--back {
  background-image: url("https://raw.githubusercontent.com/natespinetti/CS601-HW6/main/img/watercards.png");
  background-size: 175px;
  background-repeat: no-repeat;
}

.card__face--back {
  transform: rotateY(180deg);
}

.flipme {
  transform: rotateY(180deg);
}
</style>