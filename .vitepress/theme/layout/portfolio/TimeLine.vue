<script setup lang="ts">
const experienceList = [
  {
    title: "Frontend Developer",
    company: "eSurfing Cloud",
    time: "January 2024 - Present",
    desc: "Collaborated with product and project managers, designers, and fellow engineers to develop and deploy features within an agile (3 week) cadence"
  },
  {
    title: "Junior Frontend Developer",
    company: "eSurfing Cloud",
    time: "July 2022 - January 2024",
    desc: "Build, style, and ship high-quality websites for a diverse array of clients using technologies using Javascript, TypeScript, Vue, Echarts, SCSS and more"
  },
  {
    "title": "Freelancer Frontend Developer",
    "time": "August 2019 - June 2022",
    "desc": "Studied frontend development independently, focusing on Javascript, HTML, CSS, jQuery, Bootstrap, and Vue.js."
  }
]
</script>

<template>
  <div class="my-12 px-4">
    <h1
      class="hover:text-shadow-3 m-0 font-heading text-[clamp(3rem,_10vw,_4.5rem)] font-black tracking-[-0.2rem] transition-all duration-300">
      Experience</h1>
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li v-for="(exp, idx) in experienceList" class="timeline-item dark:text-white" :key="exp.title">
        <time :class="['timeline-box', idx % 2 === 0 ? 'md:timeline-start' : 'md:timeline-end', 'timeline-end']">{{ exp.time }}</time>
        <div :class="['timeline-box', idx % 2 === 0 ? 'md:timeline-end' : 'md:timeline-start', 'timeline-start']">
          <h2 class="timeline-title text-lg md:text-3xl">{{ exp.title }}</h2>
          <h4 class="timeline-subtitle text-md md:text-xl text-slate-600 dark:text-slate-400">{{ exp.company }}</h4>
          <p class="timeline-desc">{{ exp.desc }}</p>
        </div>
        <hr class="bg-primary" />
      </li>
    </ul>
  </div>
</template>
