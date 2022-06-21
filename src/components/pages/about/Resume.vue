<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="button-wrap">
      <a
        class="download"
        href="https://github.com/natespinetti/CS601-Term-Project/raw/main/img/Nathan%20Spinetti%20Resume.pdf"
        >Download the PDF</a
      >
    </div>

    <section>
      <div class="resumeLeft">
        <div class="logoSection">
          <img
            src="https://raw.githubusercontent.com/natespinetti/CS601-Term-Project/main/img/NS%20Logo.png"
            alt="Nathan Spinetti Logo"
          />
          <h3>Nathan Spinetti</h3>
        </div>
        <div class="contactArea">
          <h4>Web Developer</h4>
          <p>
            <a href="https://nathanspinetti.com"
              >My Website<br /><a
                href="https://www.linkedin.com/in/nathanspinetti/"
                >My LinkedIn</a
              ></a
            >
          </p>
        </div>
        <div class="work">
          <div class="masters">
            <p>
              <b>Boston University MET</b> <br />Graduate Certificate in Web
              Application Development <br />March 2022 - Present
            </p>
          </div>
          <div class="bachelor">
            <p>
              <b>Johnson & Wales University</b> <br />BS in Graphic Design, Web
              Design Focus <br />Summa Cum Laude, Deans List <br />GPA: 3.89
              <br />Sep. 2017 - May 2020
            </p>
          </div>
          <ResumeSection
            employer="Workhuman"
            location="Framingham, MA"
            title="Jr. Web Developer"
            dates="May 2022 - Present"
            li1="Developing rich, responsive, & interactive user experiences for
              Workhuman digital properties, landing pages, email templates, and
              digital campaigns"
            li2="Collaborate directly with designers, copywriters, and program
              owners to produce successfol global B2B Marketing programs"
          />
          <br />
          <ResumeSection
            employer="MP"
            location="Beverly, MA"
            title="Web Developer - Graphic Designer"
            dates="Aug 2020 - Apr 2022"
            li1="Design custom WordPress website from concept to completion
              following best practices for SEO and overall user experience"
            li2="Project responsibilities include development, testing,
              documentation, implementation, maintenance, and analytics"
          />
          <br />
          <ResumeSection
            employer="MP"
            location="Beverly, MA"
            title="Interim Marketing Specialist"
            dates="Apr 2021 - Dec 2021"
            li1="Set a record for webinar registrants as well as new to file leads
              in a single week, 688 registrants and 523 new to file leads"
            li2="Develop, implement, and track marketing programs such as email,
              social media, or digital campaigns, and events"
          />
          <br />
          <ResumeSection
            employer="Freelance"
            location="Plymouth, MA"
            title="Web Developer - Graphic Designer"
            dates="Apr 2020 - Present"
            li1="Designed and developed a unique website to fit the clients desired user experience"
            li2="Collaborated with clients to create unique branding to display
              their professionalism through a unified look and feel across all
              platforms and media including business cards and social media"
          />
          <br />
          <ResumeSection
            employer="IGT"
            location="Providence, RI"
            title="Graphic Design Intern"
            dates="Nov 2019 - Mar 2020"
            li1="Followed brand guidelines to successfolly design unique and
              eye-catching work with innovative ideas primarily for in-house
              usage"
            li2="Collaborated in a small design team to incorporate our
              perspectives on different concepts for lottery designs and other
              branches of the company"
          />
          <br />
          <ResumeSection
            employer="Design Solutions Team"
            location="Providence, RI"
            title="Internal/External Client Projects"
            dates="Sep 2019 - Feb 2020"
            li1="Designed numerous logo concepts for different brands"
            li2="Utilized different skills to complete the task at hand for
              Colinary and Event Management Classes including but not limited to
              the Adobe Creative Suite"
          />
        </div>
      </div>
      <div class="proficiencyRight">
        <h4>Proficiencies</h4>
        <ul>
          <li>HTML/HTML5</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>PHP</li>
          <li>MySQL</li>
          <li>SEMRush</li>
          <li>SEO</li>
          <li>Web Analytics</li>
          <li>Theme Development</li>
          <li>Childtheme Development</li>
          <li>Adobe Creative Suite</li>
          <li>JQuery</li>
          <li>Boostrap</li>
          <li>Foundation 6</li>
          <li>WordPress</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>InDesign</li>
          <li>After Effects</li>
          <li>Lightroom</li>
          <li>Acrobat</li>
          <li>Typography</li>
          <li>Print Design</li>
          <li>Web Design</li>
          <li>Digital Photography</li>
          <li>Video Production</li>
          <li>Microsoft Office Suite</li>
          <li>Communication</li>
          <li>Creativity</li>
          <li>Time Management</li>
          <li>Windows OS</li>
          <li>Mac OS</li>
          <li>Color Theory</li>
          <li>Problem Solving</li>
          <li>Marketing</li>
          <li>Email Marketing</li>
          <li>Collaboration</li>
          <li>Planning/ Organizing</li>
        </ul>
      </div>
      <div class="honors">
        <h4>Honors & Awards</h4>
        <ul>
          <li>JWU Design Exhibit 2018-2020</li>
          <li>
            JWU Accelerated Degree Program Special Honors and Rewards Program
            (SHARP) 2019-2020
          </li>
          <li>
            “Graphic Design Students Rock JWU Equinox Concert Promotion” by D.
            Teixeira
          </li>
          <li>
            “One Night Only: Students Produce + Promote Live Concert” by M. Hill
          </li>
          <li>
            “Students Follow Their Instincts to Create Top Design Solutions” by
            D. Teixeira
          </li>
          <li>
            Boston Globe | 2016 Scholastic Art Competition Two Gold Keys in
            Photography
          </li>
          <li>
            “Erotomania” | Best Cinematography Short Film in 2017 10 Day
            Challenge
          </li>
          <li>
            “Bad Hitmen” | 1st Place, Audience Unanimous Choice in 2016 M.O.V.E.
            Festival
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import ResumeSection from "@/components/ResumeSection";
export default {
  name: "Resume",
  data() {
    return {
      msg: "Nathan Spinetti Resume",
    };
  },
  components: {
    ResumeSection,
  },
};
</script>

<style scoped>
section {
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto;
  display: grid;
  text-align: left;
  grid-gap: 50px;
  width: 90%;
  padding: 2rem;
  margin: auto;
  box-shadow: 0px 20px 20px 10px rgb(0 0 0 / 10%);
}
.download {
  text-align: center;
  cursor: pointer;
  background-color: #011329;
  border-radius: 50px;
  color: #fff;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: 0.3s;
}
.button-wrap {
  margin-bottom: 2rem;
}
.download:hover {
  color: #FFD131;
}
.resumeLeft {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(3, auto);
  grid-gap: 20px 100px;
  grid-row: 1;
}
.contactArea {
  grid-column: 2;
  grid-row: 1;
}
.logoSection {
  grid-column: 1;
  grid-row: 1;
}
.bachelor {
  padding-bottom: 1rem;
}
.work {
  grid-column: 1 / span 2;
  grid-row: 3;
}
.proficiencyRight {
  grid-column: 2;
  grid-row: 1;
}
.honors {
  grid-column: 1 / span 2;
  grid-row: 2;
}
</style>