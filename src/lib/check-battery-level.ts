import {batteryStatusProps} from "@/interfaces";

export default async function checkBatteryLevel(): Promise<batteryStatusProps> {
  const res: batteryStatusProps = {
    supports: false,
    charging: false,
    level: 0,
  }

  if ("getBattery" in navigator && typeof window !== "undefined") {
    res.supports = true;
    const battery = await navigator.getBattery();
    res.charging = battery.charging;
    res.level = battery.level;

    console.log(`Battery level: ${battery.level}`);
  }

  return res;
}

