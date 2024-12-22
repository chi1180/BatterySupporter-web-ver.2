"use client"

import {SignedIn, SignedOut, SignInButton, UserButton, useUser} from "@clerk/nextjs";
import List from "@/components/list";

export default function Account() {
  const user = useUser();
  const user_data = {
    icon_src: "",
    title: "",
    inner_content: <SignInButton/>
  }
  if (user.isSignedIn) {
    user_data.icon_src = user.user.imageUrl;
    user_data.title = user.user.fullName || user.user.firstName || user.user.lastName || user.user.username || "";
    user_data.inner_content = <UserButton/>;
  }

  return (
      <div className={"w-full py-2"}>
        <SignedIn>
          <ol className={"w-full"}>
            <List
                icon_src={user_data.icon_src}
                title={user_data.title}
                inner_content={user_data.inner_content}
            />
          </ol>
        </SignedIn>

        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
  );
}

