<script setup lang="ts">
const technologies = {
  language: ["HTML", "Javascript", "TypeScript", "Rust", "Go",],
  vue: ["Vue 2/3", "Vuex", "Vue Router", "Nuxt.js", "Vitepress"],
  style: ["Tailwind", "DaisyUI", "SCSS", "CSS",],
  react: ["React", "Nuxt.js", "Redux", "React-Query",],
  build: ["Vite", "Webpack",],
  graph: ["Three.js", "Echarts",],
  backend: ["Node.js", "Nest.js", "Express.js", "Prisma", "TypeORM", "MySQL", "MongoDB", "Docker",],
  tools: ["Insomnia", "Git",],
  platform: ["Cloudflare", "Vercel",]
}

const badgeThemes = ["primary", "neutral"]
</script>

<template>
  <div class="mx-auto w-full text-center mt-16 md:flex justify-center gap-12">
    <div class="avatar hover:scale-110 duration-300">
      <div class="w-48 mask mask-squircle">
        <img src="../assets/avatar.jpg" />
      </div>
    </div>
    <div>
      <h1
        class="hover:text-shadow-3 m-0 font-heading font-black tracking-[-0.3rem] transition-all duration-300 text-primary text-4xl md:text-5xl">
        Yujian(Larry) Xue</h1>
      <div class="flex flex-col gap-4 dark:text-white italic text-lg md:text-left mt-2">
        <p>Frontend Engineer 💻</p>
        <p>Side Project Manager 🚀</p>
        <p>Open Source Contributor 🤯</p>
      </div>
    </div>
  </div>
  <div class="px-4 mt-2">
    <h4 class="hover:text-shadow-3 m-0 font-heading text-lg font-black tracking-[-0.1rem] transition-all duration-300">A
      bit about me</h4>
    <p>Hey there! 👋 I'm Yujian (Larry), a results-driven Front-End Developer with over 2 years of experience,
      specializing in web application development. Currently employed at eSurfing Cloud, I'm passionate about crafting
      engaging user experiences and leveraging cutting-edge technologies to bring ideas to life.</p>
  </div>
  <div class="px-4 mt-4">
    <div class="collapse collapse-plus duration-300 dark:text-white border border-primary">
      <input type="checkbox" class="peer" />
      <div class="collapse-title">
        <h4
          class="hover:text-shadow-3 m-0 font-heading text-lg font-black tracking-[-0.1rem] transition-all duration-300">
          Technologies and Tools</h4>
      </div>
      <div class="collapse-content">
        <div class="flex flex-wrap gap-4 py-1" v-for="(item, idx) in Object.keys(technologies)">
          <div :class="`badge badge-${badgeThemes[idx % badgeThemes.length]}`" v-for="tech in technologies[item]">{{
            tech }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="px-4 mt-4">
    <div class="collapse bg-base-200 collapse-plus duration-300 dark:text-white border border-primary">
      <input type="checkbox" class="peer" />
      <div class="collapse-title">
        <h4
          class="hover:text-shadow-3 m-0 font-heading text-lg font-black tracking-[-0.1rem] transition-all duration-300">
          Personal Traits</h4>
      </div>
      <div class="collapse-content indent-4">
        <p>Remote Work Enthusiast: Actively seeking remote development opportunities to embrace flexibility and expand
          my horizons.
        </p>
        <p>
          Running Enthusiast: Outside of coding, you can often find me enjoying a refreshing run.
        </p>
        <p>
          Work-Life Balance Advocate: Valuing work-life balance, I prioritize maintaining harmony between professional
          and personal life.
        </p>
        <p>
          Technical Excellence Pursuer: Detail-oriented and constantly striving for excellence in technical
          implementations, I stay updated with the latest advancements in the field.
        </p>
        <p>
          AI Technology Follower: I'm particularly interested in AI technology, especially in how it can be utilized to
          enhance work efficiency. I enjoy experimenting with various AI tools and staying updated on the latest
          advancements in the field.
        </p>
      </div>
    </div>
  </div>
</template>
