import {sectionProps} from "@/interfaces";
import {ReactNode} from "react";
import Dashboard from "@/components/dashboard";
import TaskList from "@/components/task-list";
import Settings from "@/components/settings";
import Help from "@/components/help";
import About from "@/components/about";

export default function Section({ section_name }: sectionProps)
{
  let inner_content: ReactNode;
  switch (section_name) {
    case "dashboard":
      inner_content = <Dashboard />;
      break;
    case "task list":
      inner_content = <TaskList />;
      break;
    case "settings":
      inner_content = <Settings />;
      break;
    case "help":
      inner_content = <Help />;
      break;
    case "about":
      inner_content =<About />;
      break;
    default:
      inner_content = <Dashboard />;
  }

  return (
      <section className={"w-full h-screen pt-4 bg-secondary-color rounded-tl-lg"} id={section_name.replaceAll(" ", "-").toLowerCase()}>
        <div className={"w-full h-full rounded-tl-lg bg-main-color flex flex-col"}>
          <header className={"w-full h-16 flex items-center pl-6"}>
            <h1 className={"text-2xl"}>{section_name}</h1>
          </header>

          <div className={"w-full h-full p-4"}>
            {inner_content}
          </div>
        </div>
      </section>
  );
}