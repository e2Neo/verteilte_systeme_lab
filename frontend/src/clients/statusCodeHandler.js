import { ToastService } from "../services/ToastService";

// Can be used to define custom messages for specific status codes 
function handleResponse(response) {
  switch (response.status) {
    case 200:
      ToastService.success(response.status + ": " + response.message);
      break;
    case 204:
      ToastService.success(response.status + ": " + response.message);
      break;
    default:
      ToastService.success(response.status + ": " + response.message);
      break;
  }
  return response
}
// Can be used to define custom messages for specific error codes
function handleError(error) {
  switch (error.response.status) {
    case 401: 
      ToastService.error("Authorization needed.") // Example for a specific error handler
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
