

import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionButton = async () => {
  const user = await authUserSession();

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex justify-between gap-2">
      {user ? (
        <Link href="/users/dashboard" className="text-sm py-1  text-color-light hover:opacity-70">
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="text-sm bg-color-primary text-color-secondary py-1 px-2 rounded-sm inline-block hover:opacity-90"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
