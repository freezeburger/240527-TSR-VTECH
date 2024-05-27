<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import { User } from './core/interfaces/user.entity';
import { postService, userService } from './core/services';
import { Post } from './core/interfaces/post.entity';

const users:Ref<Post[]> = ref([])

onMounted(()=> {
  postService.read().then( res => users.value = res.data )
})
</script>



<template>
  <h1>VALTECH</h1>
  <pre>{{ users }}</pre>
  <button></button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
