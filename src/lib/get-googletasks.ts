import {clerkClient} from "@clerk/nextjs/server";
import {google} from "googleapis";

export default async function getGoogleTasks(user_id: string)
{
  const clerk_client = await clerkClient();
  const token = await clerk_client.users.getUserOauthAccessToken(user_id, "oauth_google");
  const Tasks = google.tasks({
    version: "v1",
    headers: {
      Authorization: `Bearer ${token.data[0].token}`,
    }
  });

  const response = await Tasks.tasklists.list();
  const taskLists = response.data.items || [];
  const allTasks = [];
  if (taskLists.length > 0) {
    for (const task of taskLists) {
      const response = await Tasks.tasks.list({
        tasklist: task.id || "",
        showCompleted: false,
        showHidden: false,
      });
      if (response.data.items) allTasks.push(...response.data.items);
    }
  }

  return allTasks;
}

