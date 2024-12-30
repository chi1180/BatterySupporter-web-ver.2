import {localstorage_data_names, standardSettingData} from "@/datas";

export function setup() {
  localStorage.setItem(localstorage_data_names.settingsData, JSON.stringify(standardSettingData));
}

export function changeProperty(property: string, value: boolean | number) {
  const stored_data = localStorage.getItem(localstorage_data_names.settingsData);
  if (stored_data) {
    const settingsData = JSON.parse(stored_data);
    settingsData[property] = value;
    localStorage.setItem(localstorage_data_names.settingsData, JSON.stringify(settingsData));
  } else {
    setup();
    changeProperty(property, value);
  }
}

export function getProperty(property: string) {
  const stored_data = localStorage.getItem(localstorage_data_names.settingsData);
  if (stored_data) {
    const settingsData = JSON.parse(stored_data);
    return settingsData[property];
  } else {
    setup();
    getProperty(property);
  }
}