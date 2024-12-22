import {listProps} from "@/interfaces";

export default function List({ icon, title, inner_content }: listProps)
{
  return (
      <details className={"w-full p-2 rounded-md border border-secondary-color"}>
        <summary className={"w-full h-12 py-2 flex"}>
          <span className={"h-full aspect-square rounded-full relative flex items-center"}>
            {icon}
          </span>
          <p className={"text-xl pl-4"}>{title}</p>
        </summary>
        <div className={"w-full"}>
          <span className={`w-11/12 ${inner_content ? "h-1" : ""} bg-secondary-color rounded-full`}></span>
          <div className={"w-full"}>{inner_content}</div>
        </div>
      </details>
  );
}

