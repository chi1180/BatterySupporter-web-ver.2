import { settingPropertyNames } from "@/interfaces";
import { getProperty } from "./setting-data";

interface ElectronWindow extends Window {
  electron?: {
    sendSetting(): void;
    isElectron: boolean;
  };
}

export default function sendSetting(prop: settingPropertyNames) {
  if (typeof Window === "undefined") return;
  getProperty(prop);

  if (
    "electron" in window &&
    "sendSetting" in (window as ElectronWindow).electron!
  ) {
    (window as ElectronWindow).electron?.sendSetting();
  }
}
