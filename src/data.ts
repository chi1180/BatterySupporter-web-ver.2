import { settingsProps } from "@/interfaces";

export const section_names = [
  "dashboard",
  "task list",
  "settings",
  "help",
  "about",
];

export const localstorage_data_names = {
  taskData: "task-data",
  settingsData: "settings-data",
};

export const standardSettingData: settingsProps = {
  process_status: true,
  start_on_sign_in: true,
  minimize_in_system_try: true,
  notify_battery_insufficient: true,
  task_count: 3,
  battery_level: 20,
  insufficient: false,
};

export const AppInfo = {
  current_version: "1.1.1",
  release_date: "01/10/2025",
  release_note: `= 1.1.1 =
  [監視中のタスク]にバッテリ残量不足の警告を表示する機能を追加
  [バッテリの残量不足を通知]がONにされたら、通知リクエストを送信する機能を追加
  Web版での[起動設定]の非表示を実装
  [監視のON/OFF]がONの場合のみ、GoogleTasksとバッテリ残量の監視を行うよう機能変更
  [Release data]の日付表記をアメリカ式に変更
  関数の細分化

= 1.0.0 =
  First release.`,
};
