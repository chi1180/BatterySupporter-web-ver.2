"use client"

import {SignedIn, SignedOut, UserButton, useUser, useClerk } from "@clerk/nextjs";
import List from "@/components/list";
import {Button} from "@mui/material";

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
          <Button
              variant={"contained"}
              color={"inherit"}
              onClick={() => openSignIn()}
          >
            <p>Sign in</p>
          </Button>
        </SignedOut>
      </div>
  );
}

