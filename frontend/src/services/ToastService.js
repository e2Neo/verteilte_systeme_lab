import { app } from "@main";

const toastLifetime = 3000;

export const ToastService = {
  info(message) {
    app.config.globalProperties.$toast.add({
      severity: "info",
      summary: "Information",
      detail: message,
      life: toastLifetime,
    });
  },
  warn(message) {
    app.config.globalProperties.$toast.add({
      severity: "warn",
      summary: "Warning",
      detail: message,
      life: toastLifetime,
    });
  },
  error(message) {
    app.config.globalProperties.$toast.add({
      severity: "error",
      summary: "Error",
      detail: message,
      life: toastLifetime,
    });
  },
  success(message) {
    app.config.globalProperties.$toast.add({
      severity: "success",
      summary: "Success",
      detail: message,
      life: toastLifetime,
    });
  },
};
