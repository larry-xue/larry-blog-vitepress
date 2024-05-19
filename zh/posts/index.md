---
title: 文章
---

<h1 class="mb-4">
  文章
</h1>

<div v-for="post in posts" class="mb-4">
  <PostCard :post="post" />
</div>

<script setup>
import PostCard from './PostCard.vue'
import { ref } from 'vue'
import { data } from './index.data.ts'

const posts = ref(data);
</script>
