export default function notificationSender(title: string, message: string, against?: boolean) {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, { icon: "./favicon.ico", body: message });
  } else if (!against) {
    requestNotification()?.then(() => notificationSender(title, message, true));
  }
}

export function requestNotification() {
  if ("Notification" in window && Notification.permission !== "granted")
    return Notification.requestPermission();
}
