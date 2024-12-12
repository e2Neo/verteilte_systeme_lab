import Toast from "primevue/toast";
import { ToastService } from "../services/ToastService";

// Can be used to define custom messages for specific status codes 
export function handleResponse(response) {
  console.log(response);
  switch (response.status) {
    // Can be extended here with handlers for specific status codes
    case 201:
      ToastService.success();
    default:
      break;
  }
  return response
}
// Can be used to define custom messages for specific error codes
export function handleError(error) {
  console.error(error);
  switch (error.response.status) {
    case 401: 
      ToastService.error("Authorization needed. Please log in.") // Example for a specific error handler
    default:
      ToastService.error(error.status + ": " + error.response.statusText);
      break;
  }
  return Promise.reject(error);
}


