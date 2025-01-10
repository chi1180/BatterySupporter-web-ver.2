import { batteryStatusProps, taskForm } from "@/interfaces";
import checkBatteryLevel from "./check-battery-level";
import { getProperty } from "./setting-data";
import { standardSettingData, localstorage_data_names } from "@/data";

export default async function checkInsufficient() {
  if (typeof window === "undefined") return false;

  const res: batteryStatusProps = await checkBatteryLevel();
  if (res.supports) {
    if (res.charging) return false;

    let task_count = getProperty("task_count");
    let battery_level = getProperty("battery_level");
    if (typeof task_count !== "number")
      task_count = standardSettingData.task_count;
    if (typeof battery_level !== "number")
      battery_level = standardSettingData.battery_level;

    let all_task = 0;
    const storedTask = localStorage.getItem(localstorage_data_names.taskData);
    if (storedTask) {
      JSON.parse(storedTask).forEach((task: taskForm) => {
        if (task.use_battery) all_task++;
      });
    }
    return res.level * 100 <= battery_level && all_task >= task_count;
  }
  return false;
}
