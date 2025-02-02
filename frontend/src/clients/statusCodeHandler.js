import Toast from "primevue/toast";
import { ToastService } from "../services/ToastService";

// Can be used to define custom messages for specific status codes
export function handleResponse(response) {
  switch (response.status) {
    // Can be extended here with handlers for specific or common status codes
    case 201:
      ToastService.success("Item created successfully.");
      break;
    case 204:
      ToastService.success("Item deleted successfully.");
      break;
    default:
      break;
  }
  return response;
}
// Can be used to define custom messages for specific error codes
export function handleError(error) {
  console.error(error);
  switch (error.response.status) {
    case 404:
      ToastService.error("Item not found.");
      break;
    default:
      ToastService.error(error.status + ": " + error.response.statusText);
      break;
  }
  return Promise.reject(error);
}
