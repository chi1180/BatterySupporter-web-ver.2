"use client"

import {SignedIn, SignedOut, SignInButton, UserButton, useUser} from "@clerk/nextjs";
import List from "@/component/list";

export default function Account() {
  const user = useUser();
  const user_data = {
    name: "",
  }
  if (user.isSignedIn) {
    user_data.name = user.user.fullName || user.user.firstName || user.user.lastName || user.user.username || "";
  }

  return (
      <div className={"w-full py-2"}>
        <SignedIn>
          <ol className={"w-full"}>
            <List
                icon=<UserButton/>
                title={user_data.name}
                inner_content={undefined}
            />
          </ol>
        </SignedIn>

        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
  );
}

