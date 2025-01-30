import { changeProperty, getProperty } from "./setting-data";
import updateGoogleTasks from "./update-google-tasks";
import checkInsufficient from "./check-insufficient";
import { localstorage_data_names } from "@/data";
import notificationSender from "./notification-sender";
import { taskForm } from "@/interfaces";

export default function regularlyFunc() {
  const process_status = getProperty("process_status");
  if (process_status) {
    updateGoogleTasks();
    checkInsufficient().then((res) => {
      changeProperty("insufficient", res as boolean);
      console.log("Insufficient: ", res, res as boolean);
      if (res) {
        const notify_battery_insufficient = getProperty(
          "notify_battery_insufficient",
        );
        if (notify_battery_insufficient) {
          let tasks = "";
          const storedTask = localStorage.getItem(
            localstorage_data_names.taskData,
          );
          if (storedTask) {
            JSON.parse(storedTask).forEach((task: taskForm) => {
              if (task.use_battery) tasks += `- ${task.title}\r\n`;
            });
          }
          notificationSender(
            "バッテリの残量が十分でありません！",
            `デバイスの使用を控えるか、充電することをお勧めします！\r\n#今後のタスク#\r\n${tasks}`,
          );
        }
      }
    });
  }
}
