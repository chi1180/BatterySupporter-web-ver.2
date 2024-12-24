"use client"

import {SignedIn, SignedOut, UserButton, useUser, useClerk } from "@clerk/nextjs";
import List from "@/components/list";

export default function Account() {
  const user = useUser();
  const user_data = {
    name: "",
  }
  if (user.isSignedIn) {
    user_data.name = user.user.fullName || user.user.firstName || user.user.lastName || user.user.username || "";
  }
  const { openSignIn } = useClerk();

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
          <button
              className={"w-32 h-14 rounded-md bg-secondary-color flex flex-col items-center justify-center"}
              onClick={() => openSignIn()}
          >
            <p className={"text-xl"}>Sign in</p>
            <p className={"text-xs"}>with Google</p>
          </button>
        </SignedOut>
      </div>
  );
}

