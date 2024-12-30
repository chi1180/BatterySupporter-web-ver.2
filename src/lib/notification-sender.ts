export default function notificationSender(message: string)
{
  if ("Notification" in window) {
    if (Notification.permission === "granted") {
      new Notification(message, {
        icon: "./favicon.ico",
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(() => {
        notificationSender(message);
      });
    }
  }
}