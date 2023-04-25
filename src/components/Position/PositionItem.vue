<template>
    <div class="position-item p-4 border-b border-gray-200">
      <div class="flex justify-between items-center">
        <div>
          <h3 class="text-xl font-bold">{{ position.title }}</h3>
          <p class="text-gray-600">Department: {{ position.department }}</p>
        </div>
        <div>
          <!-- <button @click="editPosition" class="bg-blue-500 text-white px-4 py-2 rounded mr-2">Edit</button> -->
          <button @click="deletePosition" class="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      position: {
        type: Object,
        required: true,
      },
    },
    methods: {
      editPosition() {
        this.$emit("edit-position", this.position);
      },
      deletePosition() {
        this.$emit("delete-position", this.position._id);
      },
    },
  };
  </script>
  