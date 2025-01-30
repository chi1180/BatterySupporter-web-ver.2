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
  current_version: "1.4.3",
  release_date: "01/31/2025",
  release_note: `=1.4.3=
  ホームページをリニューアル
  Push通知のメッセージスタイルを改善
  Release noteのtypoを修正

= 1.3.1 =
  利用規約、プライバシーポリシをアプリ内のページに作成
  Dashboardの「監視中のタスク」をスクロール可能に機能変更

= 1.2.2 =
  利用規約とプライバシーポリシーポリシーを追加
  フィードバックフォームの入力項目に枠線を表示
  フィードバックフォームの入力必須項目に"（必須）"を表記

= 1.1.1 =
  [監視中のタスク]にバッテリ残量不足の警告を表示する機能を追加
  [バッテリの残量不足を通知]がONにされたら、通知リクエストを送信する機能を追加
  Web版での[起動設定]の非表示を実装
  [監視のON/OFF]がONの場合のみ、GoogleTasksとバッテリ残量の監視を行うよう機能変更
  [Release data]の日付表記をアメリカ式に変更
  関数の細分化

= 1.0.0 =
  First release.`,
};
