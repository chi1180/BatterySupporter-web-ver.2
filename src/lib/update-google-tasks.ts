import { localstorage_data_names } from "@/data";
import { taskForm } from "@/interfaces";
import taskClassification from "./task-classification";

export default async function updateGoogleTasks() {
  const taskFetchData = await fetch("/api/tasks/?method=get");
  if (taskFetchData) {
    const storedData = localStorage.getItem(localstorage_data_names.taskData);
    const pastData: taskForm[] = storedData ? JSON.parse(storedData) : [];
    const formedData: taskForm[] = [];

    const result = await taskFetchData.json();
    if (result && result?.content) {
      for (const task of result.content) {
        let is_already: boolean = false;
        for (const past_task of pastData) {
          is_already = task.id === past_task.id;
          if (is_already) {
            if (
              task.title !== past_task.title ||
              task.notes !== past_task.notes
            ) {
              is_already = false;
            } else {
              formedData.push({
                title: task.title || "",
                notes: task.notes || "",
                due: task.due || "",
                id: task.id || "",
                use_battery: past_task.use_battery,
                ignore: past_task.ignore,
              });
            }
            break;
          }
        }
        if (is_already) continue;

        const use_battery = await taskClassification({
          type: "use-battery",
          content: `Title: ${task.title}, Notes: ${task.notes}`,
        });
        formedData.push({
          title: task.title || "",
          notes: task.notes || "",
          due: task.due || "",
          id: task.id || "",
          use_battery: use_battery,
          ignore: !use_battery,
        });
      }
      localStorage.setItem(
        localstorage_data_names.taskData,
        JSON.stringify(formedData),
      );
      console.log(formedData);
    }
  }
}
