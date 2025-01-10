/* << Components interfaces /> */

import { ReactNode } from "react";

export interface sectionProps {
  section_name: string | undefined;
}

export interface contentProps {
  content_title: string;
  inner_content: ReactNode;
}

export interface listProps {
  icon: ReactNode | null;
  title: string;
  inner_content: ReactNode | undefined;
}

export interface switchBtnProps {
  property:
    | "process_status"
    | "start_on_sign_in"
    | "minimize_in_system_try"
    | "notify_battery_insufficient";
}

export interface numberInpProps {
  property: "task_count" | "battery_level";
}

/* << Libs interfaces /> */

export interface taskForm {
  title: string;
  notes: string;
  due: string;
  id: string;
  use_battery: boolean;
  ignore: boolean;
}

export interface taskClassificationProps {
  type: "use-battery";
  content: string;
}

export interface settingsProps {
  process_status: boolean;
  start_on_sign_in: boolean;
  minimize_in_system_try: boolean;
  notify_battery_insufficient: boolean;
  task_count: number;
  battery_level: number;
  insufficient: boolean;
}

export type settingPropertyNames =
  | "process_status"
  | "start_on_sign_in"
  | "minimize_in_system_try"
  | "notify_battery_insufficient"
  | "task_count"
  | "battery_level"
  | "insufficient";

export interface batteryStatusProps {
  supports: boolean;
  charging: boolean;
  level: number;
}

declare global {
  interface Window {
    electron?: {
      isElectron: boolean;
    };
  }
}
