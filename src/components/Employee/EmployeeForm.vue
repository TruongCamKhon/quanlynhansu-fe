<template>
  <div class="employee-form">
    <h2 class="text-2xl font-bold mb-4">{{ formTitle }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block mb-2" for="fullname">Full Name</label>
        <input
          type="text"
          id="fullname"
          v-model="employee.fullname"
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2" for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="employee.email"
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div class="mb-4">
        <label for="position" class="block mb-2">Position</label>
        <select
          id="position"
          v-model="employee.position"
          class="w-full p-2 border border-gray-300 rounded"
        >
          <option
            v-for="position in positions"
            :key="position._id"
            :value="position._id"
          >
            {{ position.title }}
          </option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block mb-2" for="salary">Salary</label>
        <input
          type="number"
          id="salary"
          v-model="employee.salary"
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div class="flex justify-end">
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    formTitle: {
      type: String,
      required: true,
    },
    employeeData: {
      type: Object,
      required: true,
    },
    positions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      employee: {
        // Khai báo thuộc tính "employee" và gán giá trị mặc định
        fullname: "",
        email: "",
        position: "",
        salary: "",
      },
      positions: [],
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("submit-form", this.employee);
    },
    async fetchPositions() {
      try {
        const response = await this.$axios.get(
          "http://localhost:5000/api/positions"
        );
        this.positions = response.data.data;
      } catch (error) {
        console.error("Error fetching positions:", error);
      }
    },
  },
  mounted() {
    this.fetchPositions();
  },
  watch: {
    employeeData: {
      handler(newValue) {
        this.employee = { ...newValue };
      },
      deep: true,
    },
  },
};
</script>
