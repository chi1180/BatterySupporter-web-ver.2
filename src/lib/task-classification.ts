import {taskClassificationProps} from "@/interfaces";

export default async function taskClassification({type, content}: taskClassificationProps) {
  switch (type) {
    case "use-battery":
      const response = await fetch(`/api/tasks?method=classing&content=${content}`);
      const result = await response.json();
      return result.content;
    default:
      return false;
  }
}

