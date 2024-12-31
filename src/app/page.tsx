"use client"

import Section from "@/components/section";
import Sidebar from "@/components/sidebar";
import {section_names, localstorage_data_names} from "@/datas";
import useSWR from "swr";
import {useEffect} from "react";
import {batteryStatusProps, taskForm} from "@/interfaces";
import taskClassification from "@/lib/task-classification";
import checkBatteryLevel from "@/lib/check-battery-level";
import {getProperty} from "@/lib/setting-data";
import notificationSender from "@/lib/notification-sender";

export default function Home() {
  const {data} = useSWR('/api/tasks/?method=get', fetch, {
    refreshInterval: 1000 * 60,
  });
  useEffect(() => {
    if (data) {
      const storedData = localStorage.getItem(localstorage_data_names.taskData);
      const pastData: taskForm[] = storedData ? JSON.parse(storedData) : [];
      const formedData: taskForm[] = [];

      data.json().then(async (result) => {
        if (result && result?.content) {
          for (const task of result.content) {
            let is_already: boolean = false;
            for (const past_task of pastData) {
              is_already = task.id === past_task.id;
              if (is_already) {
                if (task.title !== past_task.title || task.notes !== past_task.notes) {
                  is_already = false;
                } else {
                  formedData.push({
                    title: task.title || "",
                    notes: task.notes || "",
                    due: task.due || "",
                    id: task.id || "",
                    use_battery: past_task.use_battery,
                    ignore: past_task.ignore,
                  });
                }
                break;
              }
            }
            if (is_already) continue;

            const use_battery: boolean = await taskClassification({
              type: "use-battery",
              content: `Title: ${task.title}, Notes: ${task.notes}`
            });
            formedData.push({
              title: task.title || "",
              notes: task.notes || "",
              due: task.due || "",
              id: task.id || "",
              use_battery: use_battery,
              ignore: !use_battery,
            });
          }
          localStorage.setItem("task-data", JSON.stringify(formedData));
        }
      });
    }
  }, [data]);

  async function checkDeviceStatus() {
    if (typeof window === "undefined") return false;

    const res: batteryStatusProps = await checkBatteryLevel();
    if (res.supports) {
      if (res.charging) return false;

      const task_count: number = getProperty("task_count");
      const battery_level: number = getProperty("battery_level");
      const process_status: boolean = getProperty("process_status");
      const notify_battery_insufficient: boolean = getProperty("notify_battery_insufficient");

      const storedTask = localStorage.getItem(localstorage_data_names.taskData);
      if (storedTask) {
        let all_task = 0;
        JSON.parse(storedTask).forEach((task: taskForm) => {
          if (task.use_battery) all_task ++;
        });
        console.log(process_status, notify_battery_insufficient, res.level * 100, battery_level, all_task, task_count);
        return (process_status && notify_battery_insufficient && res.level * 100 <= battery_level && all_task >= task_count);
      }
    }
  }

  const alertFunc = () => {
    checkDeviceStatus().then(res => {
      if (res) {
        console.log("checkDeviceStatus()'s response is: ",res);
        const storedTask = localStorage.getItem(localstorage_data_names.taskData);
        let tasks = "\n";
        if (storedTask) {
          JSON.parse(storedTask).forEach((task: taskForm) => {
            if (task.use_battery) tasks += `- ${task.title}\n`;
          });
        }
        notificationSender(`バッテリの残量が十分でありません！デバイスの使用を控えるか、充電することをお勧めします！\n今後のタスク:${tasks}`);
      }
    })
  }

  useEffect(() => {
    // alertFunc();  // run at first of rendering.

    const timer = setInterval(() => alertFunc(), 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  return (
      <main className={"w-screen h-screen pt-4 bg-secondary-color flex"}>
        <Sidebar/>
        <div className={"w-full h-[calc(100vh*4)]"}>
          {section_names.map((section_name, index) => (
              <Section section_name={section_name} key={index}/>
          ))}
        </div>
      </main>
  );
}
