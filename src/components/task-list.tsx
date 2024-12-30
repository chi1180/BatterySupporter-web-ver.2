"use client";

import Content from "@/components/content";
import List from "@/components/list";
import {localstorage_data_names} from "@/datas";
import {useEffect, useState} from "react";
import {Add, Block} from "@mui/icons-material";
import {taskForm} from "@/interfaces";
import {IconButton} from "@mui/material";

export default function TaskList() {
  const [task_data, setTaskData] = useState([]);

  function updateTaskData() {
    const storedData = localStorage.getItem(localstorage_data_names.taskData);
    if (storedData) {
      setTaskData(JSON.parse(storedData));
    }
  }

  useEffect(() => {
    if (typeof window === "undefined") return;

    updateTaskData();

    const timer = setInterval(updateTaskData, 1000);  // set interval
    return () => clearInterval(timer);  // return clean up function
  }, []);

  function toggleIgnoreStatus(task_id: string) {
    const new_task_data: taskForm[] = [];
    task_data.forEach((task: taskForm) => {
      if (task.id === task_id) {
        task.ignore = !task.ignore;
        task.use_battery = !task.use_battery;
      }
      new_task_data.push(task);
    });
    const save_data: string = JSON.stringify(new_task_data);
    setTaskData(JSON.parse(save_data));
    localStorage.setItem(localstorage_data_names.taskData, save_data);
  }

  function taskDetailComponent(task: taskForm) {
    return (
        <List
            icon={
              <IconButton
                  title={task.ignore ? "バッテリを消費するタスクに変更" : "バッテリを消費しないタスクに変更"}
                  onClick={() => toggleIgnoreStatus(task.id)}
              >{
                task.ignore ? <Add/> : <Block/>
              }</IconButton>
            }
            title={task.title}
            inner_content={
              <div>
                <p>{task.notes}</p>
                <p>{task.due ? "Due date: " + new Date(task.due).toLocaleDateString("en") : ""}</p>
              </div>
            }>
        </List>
    );
  }

  return (
      <div className={"w-full h-full flex"}>
        <div className={"w-1/2 h-full"}>
          <Content
              content_title={"バッテリを消費するタスク"}
              inner_content={<ol className={"w-full h-full overflow-y-scroll"}>{task_data.map((task: taskForm) => (
                  <li key={task.id}>{task.ignore ? <></> : taskDetailComponent(task)}</li>
              ))}</ol>}
          />
        </div>
        <div className={"w-1/2 h-full"}>
          <Content
              content_title={"バッテリを消費しないタスク"}
              inner_content={<ol className={"w-full h-full overflow-y-scroll"}>{task_data.map((task: taskForm) => (
                  <li key={task.id}>{task.ignore ? taskDetailComponent(task) : <></>}</li>
              ))}</ol>}
          />
        </div>
      </div>
  );
}