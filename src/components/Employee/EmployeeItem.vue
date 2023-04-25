<template>
    <div class="employee-item bg-gray-100 p-4 rounded shadow">
      <h3 class="text-xl font-semibold mb-2">{{ employee.fullname }}</h3>
      <p>Email: {{ employee.email }}</p>
      <p>Position: {{ employee.position.title }}</p>
      <p>Department: {{ employee.position.department }}</p>
      <p>Salary: {{ employee.salary }}</p>
      <p>Hire Date: {{ formatDate(employee.hireDate) }}</p>
      <div class="flex mt-4">
        <!-- <button @click="editEmployee" class="bg-blue-500 text-white px-4 py-2 rounded mr-2">Edit</button> -->
        <button @click="deleteEmployee" class="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      employee: {
        type: Object,
        required: true,
      },
    },
    methods: {
      formatDate(date) {
        return new Date(date).toLocaleDateString();
      },
      editEmployee() {
        this.$emit("edit-employee", this.employee);
      },
      deleteEmployee() {
        this.$emit("delete-employee", this.employee._id);
      },
    },
  };
  </script>
  