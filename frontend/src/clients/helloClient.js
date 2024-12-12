import { RestClient } from "./restClient";

export const HelloClient = {
    hello() {
        return RestClient.get("/backend/hello");
    },
    helloName(name) {
        return RestClient.get("/backend/hello/" + name);
    },
}