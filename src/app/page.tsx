"use client";

import Section from "@/components/section";
import Sidebar from "@/components/sidebar";
import { section_names } from "@/data";
import { useEffect } from "react";
import regularlyFunc from "@/lib/regularly-func";

export default function Home() {
  useEffect(() => {
    regularlyFunc();
    const timer = setInterval(() => regularlyFunc(), 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className={"w-screen h-screen pt-4 bg-secondary-color flex"}>
      <Sidebar />
      <div className={"w-full h-[calc(100vh*4)]"}>
        {section_names.map((section_name, index) => (
          <Section section_name={section_name} key={index} />
        ))}
      </div>
    </main>
  );
}
