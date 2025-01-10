import { localstorage_data_names, standardSettingData } from "@/data";
import { settingPropertyNames, settingsProps } from "@/interfaces";

export function setup() {
  localStorage.setItem(
    localstorage_data_names.settingsData,
    JSON.stringify(standardSettingData),
  );
}

export function changeProperty(property: string, value: boolean | number) {
  const stored_data = localStorage.getItem(
    localstorage_data_names.settingsData,
  );
  if (stored_data) {
    const settingsData = JSON.parse(stored_data);
    if (property in settingsData) {
      settingsData[property] = value;
      localStorage.setItem(
        localstorage_data_names.settingsData,
        JSON.stringify(settingsData),
      );
    } else {
      setup();
      changeProperty(property, value);
    }
  } else {
    setup();
    changeProperty(property, value);
  }
}

export function getProperty(property_name: settingPropertyNames) {
  const stored_data = localStorage.getItem(
    localstorage_data_names.settingsData,
  );
  if (stored_data) {
    const settingsData: settingsProps = JSON.parse(stored_data);
    if (property_name in settingsData) {
      return settingsData[property_name];
    } else {
      setup();
      getProperty(property_name);
    }
  } else {
    setup();
    getProperty(property_name);
  }
}
