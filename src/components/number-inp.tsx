"use client";

import { useEffect, useState } from "react";
import { changeProperty, getProperty } from "@/lib/setting-data";
import { numberInpProps } from "@/interfaces";
import { standardSettingData } from "@/data";

export default function NumberInp({ property }: numberInpProps) {
  const [status, setStatus] = useState(10);

  // <<< -- DON'T CHANGE THERE EFFECT FUNCTION'S ORDER -- >>>
  useEffect(() => {
    if (typeof window === "undefined") return;
    setStatus(getProperty(property) as number);
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    changeProperty(property, status);
  }, [status]);

  return (
    <div className={"w-32 h-14 p-1 border border-secondary-color rounded-md"}>
      <input
        type={"number"}
        min={1}
        max={100}
        value={status}
        onChange={(e) =>
          setStatus(e.target.value.trim() !== "" ? parseInt(e.target.value) : 1)
        }
        className={"w-full h-full"}
      />
    </div>
  );
}
