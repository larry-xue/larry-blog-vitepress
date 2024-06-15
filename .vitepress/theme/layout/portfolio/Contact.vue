<script setup lang="ts">
const contacts = [
  {
    title: "Email",
    desc: "azoux0311@gmail.com",
  },
  {
    title: "GitHub",
    link: "https://github.com/larry-xue",
    desc: "larry-xue",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/yujay-xue-588386212/",
    desc: "yujay-xue",
  }
]
</script>

<template>
  <div class="my-12 px-4">
    <h1
      class="hover:text-shadow-3 m-0 font-heading text-[clamp(3rem,_10vw,_4.5rem)] font-black tracking-[-0.2rem] transition-all duration-300">
      Contact Me</h1>
    <div class="dark:text-white">
      <div v-for="contact in contacts" :key="contact.title">
        <a v-if="contact.link" class="btn-link" :href="contact.link">{{ contact.title }}: {{ contact.desc }}</a>
        <p v-else>{{ contact.title }}: {{ contact.desc }}</p>
      </div>
    </div>
  </div>
</template>
