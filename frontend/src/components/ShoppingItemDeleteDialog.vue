<template>
  <Dialog :visible="props.visible" :closable="false" modal>
    <template #header><h1>Delete Item</h1></template>
    Are you sure you want to delete {{ itemToDelete.amount }} of item "{{
      itemToDelete.name
    }}"?
    <template #footer>
      <Button label="Cancel" @click="props.hideDeleteDialog" />
      <Button label="Delete permanently" @click="deleteItem" severity="danger" />
    </template>
  </Dialog>
</template>

<script setup>
import { ref } from "vue";
import { ShoppingClient } from "../clients/shoppingClient";

const props = defineProps({
  visible: Boolean,
  itemToDelete: Object,
  updateTable: Function,
  hideDeleteDialog: Function,
});

async function deleteItem() {
  const response = await ShoppingClient.deleteByName(props.itemToDelete?.name);
  props.hideDeleteDialog();
}
</script>

<style scoped></style>
