export default function notificationSender(message: string, against?: boolean) {
  if ("Notification" in window && Notification.permission === "granted")
    new Notification(message, { icon: "./favicon.ico" });
  else if (!against)
    requestNotification()?.then(() => notificationSender(message, true));
}

export function requestNotification() {
  if ("Notification" in window && Notification.permission !== "granted")
    return Notification.requestPermission();
}
