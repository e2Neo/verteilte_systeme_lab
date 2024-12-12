<template>
  <Card>
    <template #content>
      <div style="display: flex; justify-content: right">
        <Button
          icon="pi pi-plus"
          label="New item"
          @click="showNewItemDialog"
        ></Button>
      </div>
      <Dialog v-model:visible="visible" modal :closable="false">
        <template #header>Add new item</template>
        <div>
          <div class="field-container">
            <label for="item-name">Item name</label>
            <InputText
              id="item-name"
              v-model="item.name"
              placeholder="Item name"
            ></InputText>
          </div>
          <div class="field-container">
            <label for="item-amount">Item amount</label>
            <InputNumber
              id="item-amount"
              v-model="item.amount"
              placeholder="Amount"
            ></InputNumber>
          </div>
        </div>

        <template #footer>
          <Button label="Cancel" @click="hideNewItemDialog" />
          <Button icon="pi pi-plus" label="Add" @click="addNewItem"></Button
        ></template>
      </Dialog>
    </template>
  </Card>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { ShoppingClient } from "@/clients/shoppingClient";
import { ToastService } from "@/services/ToastService";

const visible = ref(false);

const props = defineProps({
  updateTable: Function,
});

const item = ref({
  name: "",
  amount: null,
});

function showNewItemDialog() {
  visible.value = true;
}
async function addNewItem() {
  if ((item.value.name === "", item.value.amount === null)) {
    ToastService.warn("Please fill in all fields.");
    return;
  }
  const response = await ShoppingClient.addNewItem(item.value);
  if (response.status === 200 || response.status === 201) {
    // OpenAPI Documentation says 201 as status code but i get 200 in reality
    visible.value = false;
    props.updateTable();
  }
}
function hideNewItemDialog() {
  visible.value = false;
}
</script>

<style scoped>
.field-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
label {
  margin-right: 1rem;
}
</style>
