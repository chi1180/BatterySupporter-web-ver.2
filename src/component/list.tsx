import {listProps} from "@/interfaces";

export default function List({icon, title, inner_content}: listProps) {
  return (
      <div className={"w-full py-2"}>
        <details className={"w-full p-2 rounded-md border border-secondary-color"}>
          <summary className={"w-full h-12 pl-2 flex items-center"}>
          <span className={"h-full aspect-square rounded-full relative flex items-center"}>
            {icon}
          </span>
            <p className={"text-xl pl-1"}>{title}</p>
          </summary>
          <div className={"w-full"}>
            <div className={`w-11/12 ${inner_content ? "h-0.5" : ""} bg-secondary-color rounded-full`}></div>
            <div className={"w-full p-4"}>{inner_content}</div>
          </div>
        </details>
      </div>
  );
}

