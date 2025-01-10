"use client";

import { useEffect, useState } from "react";
import { changeProperty, getProperty } from "@/lib/setting-data";
import { switchBtnProps } from "@/interfaces";
import { requestNotification } from "@/lib/notification-sender";

export default function SwitchBtn({ property }: switchBtnProps) {
  const [status, setStatus] = useState(true);

  // <<< -- DON'T CHANGE THERE EFFECT FUNCTION'S ORDER -- >>>
  useEffect(() => {
    if (typeof window === "undefined") return;
    setStatus(getProperty(property) as boolean);
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    changeProperty(property, status);

    if (property === "notify_battery_insufficient" && status)
      requestNotification();
  }, [status]);

  return (
    <div className={"flex items-center gap-4"}>
      <div
        className={`w-32 h-14 p-1 rounded-full ${status ? "bg-secondary-color" : "bg-main-color"} border border-secondary-color relative cursor-pointer`}
        onClick={() => setStatus(!status)}
      >
        <div className={"w-full h-full relative"}>
          <div
            className={`h-full aspect-square rounded-full ${status ? "bg-main-color right-0" : "bg-secondary-color left-0"} absolute top-0`}
          ></div>
        </div>
      </div>
      <p className={"text-xl"}>{status ? "ON" : "OFF"}</p>
    </div>
  );
}
