<script setup lang="ts">
const sideProjects = [
  {
    title: "AI Hub powered by Cloudflare Worker AI",
    desc: "Developed a project using Nuxt.js and Cloudflare Worker AI, facilitating users to multiple Cloudflare Worker AI functionalities. Integrated dark/light mode and OAuth login with GitHub for enhanced user experience. Additionally, empowered users to deploy their private AI sites.",
    preview: "https://ai.larryxue.dev/",
    github: "https://github.com/larry-xue/nuxt-chat-cloudflare"
  },
  {
    title: "Folder to JSON",
    desc: "Folder to JSON is a web application utilizing the showDirectoryPicker API to enable users to select a folder on their local machine. It recursively retrieves subdirectories to generate a JSON tree structure representing the directory hierarchy.",
    preview: "https://folder2json.larryxue.dev/",
    github: "https://github.com/larry-xue/folder-to-json"
  },
  {
    title: "Personal Portfolio with VitePress",
    desc: "Built a personal portfolio website using VitePress and DaisyUI.",
    preview: "https://larryxue.dev/",
    github: "https://github.com/larry-xue/larry-blog-vitepress"
  },
  {
    title: "Vite Vue2 Starter Template",
    desc: "vite-vue2-starter is a template for quickly starting Vue.js 2 projects. Built on the Vite v5 build tool",
    preview: "",
    github: "https://github.com/larry-xue/vite-vue2-starter"
  }
]

const onOpenLink = (link: string) => {
  window.open(link, '_blank')
}
</script>

<template>
  <div class="my-12 px-4">
    <h1
      class="hover:text-shadow-3 m-0 font-heading text-[clamp(3rem,_10vw,_4.5rem)] font-black tracking-[-0.2rem] transition-all duration-300">
      Side Projects</h1>
    <div class="flex flex-wrap gap-4">
      <div class="card sm:w-80 md:w-96 border border-primary text-primary-content" v-for="project in sideProjects" :key="project.title">
        <div class="card-body dark:text-white">
          <h2 class="card-title text-primary">{{ project.title }}</h2>
          <p class="dark:text-slate-300 text-slate-700">{{ project.desc }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-ghost dark:text-white text-slate-700" v-if="project.github" @click="onOpenLink(project.github)">
              Repo
            </button>
            <button class="btn btn-ghost dark:text-white text-slate-700" v-if="project.preview" @click="onOpenLink(project.preview)">
              Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
