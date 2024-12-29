"use client"

import Section from "@/components/section";
import Sidebar from "@/components/sidebar";
import {section_names, localstorage_data_names} from "@/datas";
import useSWR from "swr";
import {useEffect} from "react";
import {taskForm} from "@/interfaces";
import taskClassification from "@/lib/task-classification";

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
              if (is_already = task.id === past_task.id) {
                formedData.push(past_task);
                break;
              }
            }
            if (is_already) continue;

            const use_battery: boolean = await taskClassification({
              type: "use-battery",
              content: `title: ${task.title}\nnotes: ${task.notes}`
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
