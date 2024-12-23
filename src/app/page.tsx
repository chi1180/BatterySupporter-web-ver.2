"use client"

import Section from "@/component/section";
import Sidebar from "@/component/sidebar";
import {section_names} from "@/datas";
import {useEffect, useState} from "react";
import useSWR from "swr";
import {taskForm} from "@/interfaces";

export default function Home() {
  const [task_data, setTaskData] = useState("");
  const {data} = useSWR('/api/tasks/?method=get', fetch, {
    refreshInterval: 1000 * 60,
  });
  useEffect(() => {
    if (data) {
      const formedData: taskForm[] = [];
      const still_task_data = task_data.length > 0 ? JSON.parse(task_data) : "";
      data.json().then(async (result) => {
        for (const task of result?.content) {
          const is_use_battery_response = await fetch(`/api/tasks?method=classing&content=title:${task.title || ""}\nnotes:${task.notes || ""}`);
          const is_use_battery_result = await is_use_battery_response.json();
          if (still_task_data.length > 0) {
            let already_got = false;
            for (const std of still_task_data) {
              if (std.id === task.id) already_got = true;
            }
            if (already_got) continue;
          }

          console.log("Pushed new data !");
          formedData.push({
            title: task.title || "",
            notes: task.notes || "",
            due: task.due || "",
            id: task.id || "",
            use_battery: is_use_battery_result.content,
            ignore: !is_use_battery_result.content,
          });
        }
        setTaskData(JSON.stringify(formedData))
        console.log(result, formedData);
      });
    }
  }, [data]);

  return (
      <main className={"w-screen h-screen pt-4 bg-secondary-color flex"}>
        <Sidebar/>
        <div className={"w-full h-[calc(100vh*4)]"}>
          {section_names.map((section_name, index) => (
              <Section section_name={section_name} key={index} shared_state={task_data} set_state={setTaskData}/>
          ))}
        </div>
      </main>
  );
}
