import Section from "@/components/section";
import Sidebar from "@/components/sidebar";
import {section_names} from "@/datas";

export default function Home() {
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
