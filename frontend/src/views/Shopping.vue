<template>
  <Button label="To Home" as="router-link" to="/"></Button>
  <ShoppingItemTable />
</template>

<script setup>
import ShoppingItemTable from "@/components/ShoppingItemTable.vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped></style>
