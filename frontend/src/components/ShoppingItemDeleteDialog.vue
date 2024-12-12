<template>
  <Dialog :visible="props.visible" :closable="false">
    <template #header><h1>Delete Item</h1></template>
    Are you sure you want to delete {{ itemToDelete.amount }} of item "{{
      itemToDelete.name
    }}"?
    <template #footer><Button label="Cancel" @click="props.hideDeleteDialog"/><Button label="Delete permanently"/></template>
  </Dialog>
</template>

<script setup>
import { ref, defineProps } from "vue";

let props = defineProps({
  visible: Boolean,
  itemToDelete: Object,
  updateTable: Function,
  hideDeleteDialog: Function
});
</script>

<style scoped></style>
