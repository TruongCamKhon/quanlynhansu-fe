<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl my-6">Employee Management</h1>

    <EmployeeForm
      :title="formTitle"
      :selectedEmployee="selectedEmployee"
      @submit-form="handleSubmit"
    />

    <EmployeeList
      :employees="employees"
      @editEmployee="editEmployee"
      @deleteEmployee="deleteEmployee"
    />
  </div>
</template>

<script>
import EmployeeForm from "../components/Employee/EmployeeForm.vue";
import EmployeeList from "../components/Employee/EmployeeList.vue";

export default {
  components: {
    EmployeeForm,
    EmployeeList,
  },
  data() {
    return {
      formTitle: "Add Employee",
      selectedEmployee: {},
      employees: [],
    };
  },
  async created() {
    try {
      const response = await this.$axios.get(
        "http://localhost:5000/api/employees"
      );
      this.employees = response.data.data;
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  },
  methods: {
    async handleSubmit(employee) {
      try {
        if (this.formTitle === "Add Employee") {
          const response = await this.$axios.post(
            "http://localhost:5000/api/employees",
            employee
          );
          this.employees.push(response.data.data);
        } else {
          const response = await this.$axios.put(
            `http://localhost:5000/api/employees/${employee._id}`,
            employee
          );
          const index = this.employees.findIndex(
            (emp) => emp._id === employee._id
          );
          this.employees.splice(index, 1, response.data.data);
        }
        this.formTitle = "Add Employee";
        this.selectedEmployee = {};
      } catch (error) {
        console.error("Error handling form submission:", error);
      }
    },
    editEmployee(employee) {
      this.formTitle = "Edit Employee";
      this.selectedEmployee = { ...employee };
    },
    async deleteEmployee(employeeId) {
      try {
        await this.$axios.delete(
          `http://localhost:5000/api/employees/${employeeId}`
        );
        this.employees = this.employees.filter(
          (employee) => employee._id !== employeeId
        );
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    },
  },
};
</script>
