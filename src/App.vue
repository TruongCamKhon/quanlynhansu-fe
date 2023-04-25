<template>
  <div id="app" class="bg-gray-100 min-h-screen">
    <nav class="bg-blue-500 p-3">
      <div class="container mx-auto">
        <router-link
          class="text-white text-lg font-semibold mr-4"
          to="/employees"
        >
          Nhân viên
        </router-link>
        <router-link
          class="text-white text-lg font-semibold"
          to="/positions"
        >
          Chức vụ
        </router-link>
      </div>
    </nav>
    <div class="container mx-auto mt-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
