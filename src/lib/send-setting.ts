import { settingPropertyNames } from "@/interfaces";
import { getProperty } from "./setting-data";

export default function sendSetting(prop: settingPropertyNames) {
  if (typeof Window === "undefined") return;
  getProperty(prop);
  if ("electron" in window) {
    if ("sendSetting" in window?.electron) {
      window?.electron?.sendSetting();
    }
  }
}
