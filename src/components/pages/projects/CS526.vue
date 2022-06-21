<template>
  <div>
    <h1>{{ msg }}</h1>

    <div class="intro-card">
      <div class="intro-title">
        <h3>Data Structures and Algorithms in Java</h3>
      </div>
    </div>
    <div class="intro-content">
      This course covers and relates fundamental components of programs.
      Students use various data structures to solve computational problems, and
      implement data structures using a high-level programming language.
      Algorithms are created, decomposed, and expressed as pseudocode. The
      running time of various algorithms and their computational complexity are
      analyzed.<br /><br /><i>Please note, these are downloadable zip files!</i>
    </div>
    <div class="projCards">
      <projectCard
        img="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/javaimg/bankequeue.jpg"
        imgalt="Priority Queue"
        link="https://github.com/natespinetti/CS601-Term-Project/raw/main/javaProjects/Spinetti_Nathan_project.zip"
        title="Priority Queue"
        date="April 26th, 2022"
        desc="This project had a lot of moving parts. With multiple different data structures being utilized to run these processes and to create the small simulation."
      />
      <projectCard
        img="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/javaimg/socialmedia.jpg"
        imgalt="Follows Relationships"
        link="https://github.com/natespinetti/CS601-Term-Project/raw/main/javaProjects/Spinetti_Nathan_Hw6.zip"
        title="Follows Relationships"
        date="April 26th, 2022"
        desc="This problem is a practice of writing a small program that stores and uses follows relationship in a graph."
      />
      <projectCard
        img="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/javaimg/sorting.jpg"
        imgalt="Sorting Algorithms"
        link="https://github.com/natespinetti/CS601-Term-Project/raw/main/javaProjects/Spinetti_Nathan_HW5.zip"
        title="Sorting Algorithms"
        date="April 19th, 2022"
        desc="Use four sorting algorithms for this experiment: insertion-sort, merge-sort, quick-sort and heap-sort."
      />
      <projectCard
        img="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/javaimg/time.jpg"
        imgalt="Insertion and Sort"
        link="https://github.com/natespinetti/CS601-Term-Project/raw/main/javaProjects/Spinetti_Nathan_HW4.zip"
        title="Insertion and Sort"
        date="April 12th, 2022"
        desc="The goal of this problem is to give an opportunity to observe differences among three data structures in Java – Java’s HashMap, ArrayList, LinkedList – in terms of insertion time and search time."
      />
      <projectCard
        img="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/javaimg/recursion.jpg"
        imgalt="Recursive Method"
        link="https://github.com/natespinetti/CS601-Term-Project/raw/main/javaProjects/Spinetti_Nathan_HW3.zip"
        title="Recursive Method"
        date="April 5th, 2022"
        desc="Write a recursive method within the IntBST class. The IntBST class implements a binary search tree that stores integers."
      />
      <projectCard
        img="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/javaimg/list.jpg"
        imgalt="Doubly Linked List"
        link="https://github.com/natespinetti/CS601-Term-Project/raw/main/javaProjects/Spinetti_Nathan_HW2.zip"
        title="Doubly Linked List"
        date="March 29th, 2022"
        desc="Practice using and manipulating a doubly linked list and the designing and implementing of a small recursive method."
      />
      <projectCard
        img="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/javaimg/objects.jpg"
        imgalt="OO Design"
        link="https://github.com/natespinetti/CS601-Term-Project/raw/main/javaProjects/CS526_Homework1_JavaFiles.zip"
        title="OO Design"
        date="March 22nd, 2022"
        desc="This object oriented design assignment was meant to give a basic review of Java. As well as Fundamental Data Structures and Basic Math Facts."
      />
    </div>
  </div>
</template>
<script>
import projectCard from "@/components/projectCard";
export default {
  name: "cs526",
  data() {
    return {
      msg: "CS526 Projects",
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