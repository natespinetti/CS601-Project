<template>
  <div>
    <p>
      <b>{{ employer }} | {{ location }}</b>
    </p>
    <p>{{ title }} | {{ dates }}</p>
    <ul>
      <li>{{ li1 }}</li>
      <li>{{ li2 }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ResumeSection",
  props: ["employer", "location", "title", "dates", "innerList", "li1", "li2"],
};
</script>