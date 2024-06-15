<script setup lang="ts">
import Navbar from './Navbar.vue';
import Education from './portfolio/Education.vue';
import SelfIntro from './portfolio/SelfIntro.vue';
import SideProject from './portfolio/SideProject.vue';
import TimeLine from './portfolio/TimeLine.vue';
import Contact from './portfolio/Contact.vue';
</script>

<template>
  <div class="artboard artboard-horizontal w-screen md:w-1/2 mx-auto font-mono">
    <Navbar />

    <SelfIntro />

    <TimeLine />

    <Education />

    <SideProject />

    <Contact />
  </div>
</template>


<style lang="scss">
@import url('../custom.css');
</style>
