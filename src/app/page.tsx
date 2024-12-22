"use client"

import Section from "@/components/section";
import Sidebar from "@/components/sidebar";
import {section_names} from "@/datas";
import {useState} from "react";
import useSWR from "swr";

export default function Home() {
  const [task_data, setTaskData] = useState([]);
  const { data, error } = useSWR('/api/google-tasks', fetch, {
    refreshInterval: 5000,
  });

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
