import { ToastService } from "../services/ToastService";
import axios from "axios";

// Can be used to define custom messages for specific status codes 
function handleResponse(response) {
  switch (response.status) {
    // Can be extended here with handlers for specific status codes
    default:
      ToastService.success(response.status + ": " + response.message);
      break;
  }
  return response
}
// Can be used to define custom messages for specific error codes
function handleError(error) {
  console.error(error);
  switch (error.response.status) {
    case 401: 
      ToastService.error("Authorization needed. Please log in.") // Example for a specific error handler
    default:
      ToastService.error(error.status + ": " + error.statusText);
      break;
  }
  return Promise.reject(error);
}

axios.interceptors.response.use(
  (response) => handleResponse(response),
  (error) => handleError(error)
);
