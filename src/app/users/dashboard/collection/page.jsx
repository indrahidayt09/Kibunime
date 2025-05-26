import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My Collection"} />
      <div className="grid grid-cols-2 gap-4  lg:grid-cols-5">
        {collection.map((collect, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${collect.anime_mal_id}`}
              className="relative"
            >
              <div className="p-2 bg-color-gray relative">
                <Image
                  src={collect.anime_image}
                  alt={collect.anime_image}
                  width={350}
                  height={350}
                  className="w-full object-cover rounded-sm"
                />

                <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-color-primary to-transparent h-40 -z-1"></div>
              </div>

              <div className="absolute flex items-center justify-center bottom-0 w-full ">
                <h5 className="text-md text-color-lightGray mb-6">
                  {collect.anime_title}
                </h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
