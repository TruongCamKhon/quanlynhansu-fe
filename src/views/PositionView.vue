<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold mb-6">Positions</h1>
    <div class="mb-8">
      <position-form
        :form-title="formTitle"
        :position-data="selectedPosition"
        @submit-form="handleSubmit"
      ></position-form>
    </div>
    <position-list
      :positions="positions"
      @editPosition="editPosition"
      @deletePosition="deletePosition"
    ></position-list>
  </div>
</template>

<script>
import PositionForm from "@/components/Position/PositionForm.vue";
import PositionList from "@/components/Position/PositionList.vue";
export default {
  components: {
    PositionForm,
    PositionList,
  },
  data() {
    return {
      formTitle: "Add Position",
      selectedPosition: {},
      positions: [],
    };
  },
  methods: {
    async fetchPositions() {
      try {
        const response = await this.$axios.get("http://localhost:5000/api/positions");
        this.positions = response.data.data;
      } catch (error) {
        console.error("Error fetching positions:", error);
      }
    },
    async handleSubmit(position) {
      try {
        if (this.formTitle === "Add Position") {
          const response = await this.$axios.post(
            "http://localhost:5000/api/positions",
            position
          );
          this.positions.push(response.data.data);
        } else {
          const response = await this.$axios.put(
            `/api/positions/${position._id}`,
            position
          );
          const index = this.positions.findIndex(
            (pos) => pos._id === position._id
          );
          this.positions.splice(index, 1, response.data.data);
        }
        this.formTitle = "Add Position";
        this.selectedPosition = {};
      } catch (error) {
        console.error("Error handling form submission:", error);
      }
    },
    editPosition(position) {
      this.formTitle = "Edit Position";
      this.selectedPosition = { ...position };
    },
    async deletePosition(positionId) {
      try {
        await this.$axios.delete(
          `http://localhost:5000/api/positions/${positionId}`
        );
        this.positions = this.positions.filter(
          (position) => position._id !== positionId
        );
      } catch (error) {
        console.error("Error deleting position:", error);
      }
    },
  },
  mounted() {
    this.fetchPositions();
  },
};
</script>
