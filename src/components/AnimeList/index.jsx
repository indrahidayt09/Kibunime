import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 ">
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="cursor-pointer transition-all"
            key={index}
          >
            <div className="bg-color-gray  pt-2 px-2 rounded-sm relative overflow-hidden max-h-60 border border-color-lightGray">
              <Image
                src={anime.images.webp.image_url}
                alt="..."
                width={350}
                height={350}
                className="w-full object-cover rounded-sm"
              />
              <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-color-primary to-transparent h-40"></div>
              <h3 className=" pb-2 pl-1 text-sm absolute bottom-0 text-color-light shadow-md">
                {anime.title}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
