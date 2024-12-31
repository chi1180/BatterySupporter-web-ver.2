import {batteryStatusProps} from "@/interfaces";

export default async function checkBatteryLevel(): Promise<batteryStatusProps> {
  const res: batteryStatusProps = {
    supports: false,
    charging: false,
    level: 0,
  }

  interface NavigatorWithBattery extends Navigator {
    getBattery?: () => Promise<{
      charging: boolean;
      level: number;
    }>;
  }

  const nav = navigator as NavigatorWithBattery;

  if (nav.getBattery && typeof window !== "undefined") {
    res.supports = true;
    const battery = await nav.getBattery();
    res.charging = battery.charging;
    res.level = battery.level;

    console.log(`Battery level: ${battery.level}`);
  }

  return res;
}

