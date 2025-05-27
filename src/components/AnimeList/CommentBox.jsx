import prisma from "@/lib/prisma";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

  return (
    <div className="flex flex-col gap-4 mb-4">
      {comments.map((comment) => {
        return (
          <div
            key={comment.id}
            className={`${inter.className} w-full text-color-lightGray bg-color-gray p-4`}
          >
            <p>{comment.username}</p>
            <p>{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
