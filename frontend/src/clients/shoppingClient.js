import { RestClient } from "./restClient";

export const ShoppingClient = {
    retrieveByName(name) {
        return RestClient.get("/api/shopping/" + name);
    },
    updateByName(name) {
        return RestClient.update("/api/shopping/" + name);
    },
    deleteByName(name) {
        return RestClient.delete("/api/shopping/" + name);
    },
    getAllItems() {
        return RestClient.get("/api/shopping");
    },
    addNewItem() {
        return RestClient.post("/api/shopping");
    }
}
