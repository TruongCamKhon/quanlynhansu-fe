<template>
  <div class="employee-list">
    <h2 class="text-2xl font-bold mb-4">Employee List</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <EmployeeItem
        v-for="employee in employees"
        :key="employee._id"
        :employee="employee"
        @edit-employee="onEditEmployee"
        @delete-employee="onDeleteEmployee"
      />
    </div>
  </div>
</template>

<script>
import EmployeeItem from "./EmployeeItem.vue";

export default {
  components: {
    EmployeeItem,
  },
  props: {
    employees: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onEditEmployee(employee) {
      this.$emit("edit-employee", employee);
    },
    onDeleteEmployee(employeeId) {
      this.$emit("delete-employee", employeeId);
    },
  },
};
</script>
