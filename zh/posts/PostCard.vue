<template>
  <div class="bg-white rounded-lg shadow-md px-4 pb-2 border border-gray-200">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-2xl font-bold">{{ post.title }}</h3>
      <div class="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-500">{{ post.date }}</div>
    </div>
    <p class="text-gray-600 mb-6">
      {{ post.summary || "暂无摘要.." }}
    </p>
    <div class="flex justify-end">
      <a class="inline-flex items-center px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
        :href="post.url">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
        阅读全文
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>