import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();

  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  return (
    <>
      <div className="px-5">
        {/* VIDEOS */}
        <div className="">
          <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
        </div>

        {/* DETAIL */}
        <div className="flex justify-center items-start gap-4 py-4 ">
          {/*IMAGES*/}
          <div className="p-2 bg-color-gray relative rounded">
            <Image
              src={anime.data.images.webp.image_url}
              alt={anime.data.images.jpg.image_url}
              width={300}
              height={300}
              className=" rounded object-cover"
            />
            <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-color-primary to-transparent h-40"></div>
          </div>

          <div className="flex flex-col justify-center gap-3">
            <div className="">
              {/*JUDUL*/}
              <h3 className="text-lg text-color-lightGray">
                {anime.data.title} - {anime.data.year}
              </h3>
            </div>

            {/*DATA*/}
            <div className=" grid grid-cols-2 items-start gap-2 text-color-primary ">
              <div className=" flex  justify-center items-center rounded border border-color-primary p-1 text-xs">
                <h3>RANK {anime.data.rank}</h3>
              </div>
              <div className=" flex justify-center items-center rounded border border-color-primary p-1 text-xs">
                <h3>SKOR {anime.data.score}</h3>
              </div>
              <div className=" flex flex-wrap justify-center items-center rounded border border-color-primary p-1 text-xs">
                <h3>ANGGOTA</h3>
                <p>{anime.data.members}</p>
              </div>
              <div className=" flex  justify-center items-center rounded border border-color-primary p-1 text-xs">
                <h3>EPS {anime.data.episodes}</h3>
              </div>
            </div>

            {/* ADD BUTTON */}
            <div className="">
              {!collection && user && (
                <CollectionButton
                  anime_mal_id={id}
                  user_email={user?.email}
                  anime_image={anime.data.images.webp.image_url}
                  anime_title={anime.data.title}
                />
              )}
            </div>
          </div>
        </div>
        {/*DESCRIPTIONS*/}
        <div className="">
          <p
            className={`${inter.className} text-justify text-sm text-color-lightGray`}
          >
            {anime.data.synopsis}
          </p>
        </div>
      </div>

      <div className="p-4 pt-5">
        <div className="pb-5">
          {user && (
          <CommentInput
            anime_mal_id={id}
            user_email={user?.email}
            username={user?.name}
            anime_title={anime.data.title}
          />
        )}
        </div>

        <h3 className="text-color-primary text-md mb-1">Komentar Penonton</h3>
        <CommentBox anime_mal_id={id} />
      </div>
    </>
  );
};

export default Page;
