<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>Here's just a glimpse into my family!</p>

    <PetSingle
      img="https://nathanspinetti.com/wp-content/uploads/2022/02/IMG_1337-edited.jpeg"
      imgalt="Baxter - Big Yorkie, May be a Morkie"
      name="Baxter"
      weight="19 lbs"
      age="7 years old"
      breed="Yorkie"
      quirk="is anxious"
    />

    <PetSingle
      img="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/IMG_1296-edited.jpeg"
      imgalt="Bentley - Blonde Lion Cub-like Yorkie"
      name="Bentley"
      weight="9 lbs"
      age="7 years old"
      breed="Yorkie"
      quirk="loves playing ball"
    />

    <PetSingle
      img="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/oliver-01.jpg"
      imgalt="Oliver - Somehow the same size as Bentley, short but long like a sausage puppy"
      name="Oliver"
      weight="9 lbs"
      age="6 months old"
      breed="Mini Dachsund"
      quirk="is very sausage like"
    />

    <PetSingle
      img="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/58D43689-8837-466F-8604-810F3509A4C6-scaled.jpeg"
      imgalt="Felix - Big gray cat with separation anxiety"
      name="Felix"
      weight="15 lbs"
      age="2 years old"
      breed="Good Boy"
      quirk="is obsessed with me"
    />
  </div>
</template>

<script>
import PetSingle from "@/components/PetSingle";
export default {
  name: "pets",
  data() {
    return {
      msg: "My Pets",
    };
  },
  components: {
    PetSingle,
  },
};
</script>