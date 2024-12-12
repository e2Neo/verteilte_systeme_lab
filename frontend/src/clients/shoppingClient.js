import { RestClient } from "./restClient";

export const ShoppingClient = {
    retrieveByName(name) {
        return RestClient.get("/api/shopping/" + name);
    },
    updateByName(name, body) {
        return RestClient.update("/api/shopping/" + name, body);
    },
    deleteByName(name) {
        return RestClient.delete("/api/shopping/" + name);
    },
    getAllItems() {
        return RestClient.get("/api/shopping");
    },
    addNewItem(body) {
        return RestClient.post("/api/shopping", body);
    }
}
