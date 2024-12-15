<template>
  <ShoppingMenu
    :updateTable="updateTable"
    style="margin-bottom: 1rem; margin-top: 1rem"
  />
  <Card>
    <template #title><h1>Shopping Items</h1></template>
    <template #content>
      <DataTable
        :value="items"
        :loading="loading"
        v-model:editingRows="editingRows"
        editMode="row"
        @row-edit-save="onRowEditSave"
      >
        <template #empty>No items found.</template>
        <!-- If seeing the ID is necessary uncomment: -->
        <!-- <Column field="id" header="ID"></Column> -->
        <Column field="name" header="Item Name"></Column>
        <Column field="amount" header="Amount"
          ><template #editor="{ data, field }">
            <InputNumber v-model="data[field]" fluid /> </template
        ></Column>
        <Column
          :rowEditor="true"
          style="width: 7rem;"
          bodyStyle="text-align:center"
        ></Column>
        <Column
          style="width: 3rem;"
          bodyStyle="text-align:center"
          ><template #body="{ data }">
            <Button
              icon="pi pi-trash"
              @click="showDeleteRowDialog(data)"
              severity="secondary"
              class="p-button-text"
              rounded
            ></Button> </template
        ></Column>
      </DataTable>
    </template>
  </Card>
  <ShoppingItemDeleteDialog
    :visible="showDeleteDialog"
    :itemToDelete="itemToDelete"
    :updateTable="updateTable"
    :hideDeleteDialog="hideDeleteDialog"
  ></ShoppingItemDeleteDialog>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import ShoppingMenu from "@/components/ShoppingMenu.vue";
import ShoppingItemDeleteDialog from "./ShoppingItemDeleteDialog.vue";
import { ShoppingClient } from "@/clients/shoppingClient";

const items = ref([]);
const editingRows = ref(null);
let loading = true;
const showDeleteDialog = ref(false);
const itemToDelete = ref(null);

onBeforeMount(async () => {
  await updateTable();
});

async function updateTable() {
  loading = true;
  const response = await ShoppingClient.getAllItems();
  if (response.status === 200) items.value = response.data;
  loading = false;
}

async function onRowEditSave(event) {
  let { newData, index } = event;
  const oldName = items.value[index].name;
  items.value[index] = newData;

  const response = await ShoppingClient.updateByName(
    oldName,
    items.value[index]
  );
}

function showDeleteRowDialog(data) {
  showDeleteDialog.value = true;
  itemToDelete.value = data;
}
async function hideDeleteDialog() {
  await updateTable();
  showDeleteDialog.value = false;
  itemToDelete.value = null;
}
</script>

<style scoped>
.p-button-secondary {
  background: transparent;
  border-color: transparent;
  color: var(--p-button-text-secondary-color);
}
.p-button-text.p-button-secondary {
  background: transparent;
  border-color: transparent;
  color: var(--p-button-text-secondary-color);
}
</style>
