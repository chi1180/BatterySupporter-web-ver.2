"use client";

import Link from "next/link";
import { section_names } from "@/data";
import {
  Dashboard,
  List,
  Settings,
  Help,
  QuestionMark,
} from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const icons = [Dashboard, List, Settings, Help, QuestionMark];
  const sectionIcon = (index: number) => {
    const Icon = icons[index];
    return <Icon color="inherit" fontSize={"large"} />;
  };
  const [selected_section, setSelectedSection] = useState("dashboard");

  useEffect(() => {
    if (window.location.href.includes("#"))
      setSelectedSection(
        window.location.href.split("#")[1].replaceAll("-", " "),
      );
    else setSelectedSection("dashboard");
  }, []);

  return (
    <aside
      className={
        "w-64 h-full p-2 bg-secondary-color flex flex-col justify-between sticky top-0 left-0"
      }
    >
      <ol className={"w-full h-full"}>
        {section_names.map((section_name, index) => (
          <li
            key={index}
            className={`w-full h-14 bg-main-color rounded-md my-4 cursor-pointer hover:opacity-100 transition-all ease-in duration-500 ${section_name === selected_section ? "opacity-100 section-link-selected" : "opacity-60"}`}
          >
            <Link
              className={"w-full h-full p-2 flex items-center"}
              href={"#" + section_name.replaceAll(" ", "-").toLowerCase()}
              onClick={() => setSelectedSection(section_name)}
            >
              {sectionIcon(index)}
              <h3 className={"pl-4"}>
                {section_name[0].toUpperCase() +
                  section_name.slice(1, section_name.length)}
              </h3>
            </Link>
          </li>
        ))}
      </ol>
      <div className={"w-full aspect-square border-t border-main-color"}></div>
    </aside>
  );
}
