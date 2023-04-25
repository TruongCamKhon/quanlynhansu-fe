<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">{{ formTitle }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
          Title
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          v-model="position.title"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="department">
          Department
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="department"
          type="text"
          v-model="position.department"
        />
      </div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        {{ formTitle }}
      </button>
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
    positionData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      position: { ...this.positionData },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("submit-form", this.position);
    },
  },
};
</script>
