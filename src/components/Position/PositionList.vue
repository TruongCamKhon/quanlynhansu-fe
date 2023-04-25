<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Position List</h2>
    <div>
      <PositionItem
        v-for="position in positions"
        :key="position._id"
        :position="position"
        @edit-position="handleEditPosition"
        @delete-position="handleDeletePosition"
      />
    </div>
  </div>
</template>

<script>
import PositionItem from "./PositionItem.vue";

export default {
  components: {
    PositionItem,
  },
  props: {
    positions: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleEditPosition(position) {
      this.$emit("edit-position", position);
    },
    handleDeletePosition(positionId) {
      this.$emit("delete-position", positionId);
    },
  },
};
</script>
