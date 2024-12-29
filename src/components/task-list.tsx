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
      console.log("Rendered!");
    }
  }

  useEffect(() => {
    if (typeof window === "undefined") return;

    updateTaskData();

    const timer = setInterval(updateTaskData, 1000 * 60);  // set interval
    return () => clearInterval(timer);  // return clean up function
  }, []);

  return (
      <div className={"w-full h-full flex"}>
        <div className={"w-1/2 h-full"}>
          <Content
              content_title={"バッテリを消費するタスク"}
              inner_content={<ol>{task_data.map((task: taskForm) => (
                  task.ignore ? <></> : <li key={task.id}>
                    <List
                        icon={
                          <IconButton>
                            <Block/>
                          </IconButton>
                        }
                        title={task.title}
                        inner_content={<div>
                          <p>{task.notes}</p>
                          <p>{task.due ? "Due date: " + new Date(task.due).toLocaleDateString("en") : ""}</p>
                        </div>}
                    ></List>
                  </li>
              ))}</ol>}
          />
        </div>
        <div className={"w-1/2 h-full"}>
          <Content
              content_title={"バッテリを消費しないタスク"}
              inner_content={<ol>{task_data.map((task: taskForm) => (
                  task.ignore ? <li key={task.id}>
                    <List
                        icon={
                          <IconButton>
                            <Add/>
                          </IconButton>
                        }
                        title={task.title}
                        inner_content={<div>
                          <p>{task.notes}</p>
                          <p>{task.due ? "Due date: " + new Date(task.due).toLocaleDateString("en") : ""}</p>
                        </div>}
                    ></List>
                  </li> : <></>
              ))}</ol>}
          />
        </div>
      </div>
  );
}