<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import star from './animation/star';
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme

// star animation
star()
</script>

<template>
  <Layout>
  </Layout>
</template>