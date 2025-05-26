import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="w-full m-h-full flex justify-center items-center pt-5">

      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-2xl text-color-secondary">Welcome, {user?.name}</h2>
        <Image src={user?.image} alt="..." width={250} height={250} />
        <div className="flex flex-wrap gap-4 rounded-2xl">
          <Link
            href="/users/dashboard/collection"
            className="bg-color-primary text-color-secondary  px-4 py-1 text-md rounded-2xl flex items-center hover:opacity-80"
          >
            My Collection
          </Link>
          <Link
            href="/users/dashboard/comment"
            className="bg-color-primary text-color-secondary  px-4 py-1 text-md rounded-2xl flex items-center hover:opacity-80"
          >
            My Comment
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Page;
