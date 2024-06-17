<script setup lang="ts">
import { onMounted } from 'vue';
import { inject } from "@vercel/analytics";

onMounted(() => {
  inject();
})
</script>
