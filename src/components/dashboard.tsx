import Content from "@/components/content";
import Account from "@/components/account";
import { useEffect, useState } from "react";
import { localstorage_data_names } from "@/data";
import { taskForm } from "@/interfaces";
import List from "@/components/list";
import SwitchBtn from "@/components/switch-btn";
import { getProperty } from "@/lib/setting-data";

export default function Dashboard() {
  const [taskData, setTaskData] = useState([]);
  const [insufficient, setInsufficient] = useState(false);
  const checkUpDataTaskData = () => {
    if (typeof window === "undefined") return;

    const storedTask = localStorage.getItem(localstorage_data_names.taskData);
    if (storedTask) setTaskData(JSON.parse(storedTask));

    setInsufficient(
      (getProperty("insufficient") as boolean) &&
        (getProperty("process_status") as boolean),
    );
  };

  useEffect(() => {
    checkUpDataTaskData();
    const interval = setInterval(() => checkUpDataTaskData(), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={"w-full h-full flex"}>
      <div className={"w-1/2 h-full"}>
        <Content
          content_title={"監視中のタスク"}
          inner_content={
            <ol className={insufficient ? "insufficient" : ""}>
              <li
                className={`${insufficient ? "" : "hidden"} px-2 py-4 rounded-md bg-accent-color bg-opacity-80`}
              >
                <p className={"text-secondary-color text-center text-lg"}>
                  バッテリの残量が十分でありません！
                  <br />
                  デバイスの使用を控えるか、充電することをお勧めします！
                </p>
              </li>
              {taskData.map((task: taskForm) => (
                <li key={task.id}>
                  {task.ignore ? (
                    <></>
                  ) : (
                    <List
                      icon={null}
                      title={task.title}
                      inner_content={
                        <div>
                          <p>{task.notes}</p>
                          <p className={task.due ? "pt-3" : ""}>
                            {task.due
                              ? "Due date : " +
                                new Date(task.due).toLocaleDateString("en")
                              : ""}
                          </p>
                        </div>
                      }
                    />
                  )}
                </li>
              ))}
            </ol>
          }
        />
      </div>
      <div className={"w-1/2 h-full flex flex-col"}>
        <Content
          content_title={"監視の ON/OFF"}
          inner_content={<SwitchBtn property={"process_status"} />}
        />
        <Content content_title={"アカウント"} inner_content={<Account />} />
      </div>
    </div>
  );
}
