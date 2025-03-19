<template>
  <Header></Header>
  <router-view />
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
}

header {
  background-color: #f4bc39;
  height: 150px;
  display: flex;
  align-items: flex-end;
  padding: 16px;
}

input {
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 25px;
}
</style>
