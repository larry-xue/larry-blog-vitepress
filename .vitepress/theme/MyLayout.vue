<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import star from './animation/star';
import DefaultTheme from 'vitepress/theme'
import HomeHeroImage from './components/HomeHeroImage.vue';

const { Layout } = DefaultTheme

// star animation
star()
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <HomeHeroImage />
    </template>
  </Layout>
</template>