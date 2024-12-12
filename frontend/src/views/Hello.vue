<template>
  <Button label="To Shopping" as="router-link" to="/shopping"></Button>
  <Card v-if="serverResponse" style="margin-bottom: 1rem">
    <template #header>
      <h1>Server says:</h1>
    </template>
    <template #content>
      {{ serverResponse }}
    </template>
  </Card>
  <Card>
    <template #content>
      <InputText v-model="name" placeholder="Enter your Name"></InputText>
      <Button :disabled="!name" @click="sayHello()">Say hello!</Button>
    </template>
  </Card>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { HelloClient } from "@/clients/helloClient";

const name = ref("");
const serverResponse = ref("");
onBeforeMount(async () => {
  const response = await HelloClient.hello();
  serverResponse.value = response.data;
});
async function sayHello() {
  const response = await HelloClient.helloName(name.value);
  serverResponse.value = response.data;
  name.value = "";
}
</script>

<style scoped></style>
