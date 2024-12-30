import {settingsProps} from "@/interfaces";

export const section_names = ["dashboard", "task list", "settings", "help", "about"];
export const localstorage_data_names = {
  taskData: "task-data",
  settingsData: "settings-data",
}

export const standardSettingData: settingsProps = {
  process_status: true,
  start_on_sign_in: true,
  minimize_in_system_try: true,
  notify_battery_insufficient: true,
  task_count: 3,
  battery_level: 20
}

