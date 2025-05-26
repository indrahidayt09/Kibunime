"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineSend } from "react-icons/md";
import { GoChecklist } from "react-icons/go";

const cheklist = <GoChecklist />;

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter();

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, comment, username, anime_title };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsCreated(true);
      setComment("");
      router.refresh();
    }
    return;
  };

  return (
    <div className="flex flex-col gap-2 p-2 border border-color-gray relative rounded-md hover:border-color-lightGray ">
      <div className="flex gap-4 text-color-lightGray text-sm">
        Tulis Komentar
        {isCreated && (
          <p className="text-color-lightGray text-xl hover:opacity-75">
            {cheklist}
          </p>
        )}
      </div>

      <textarea
        onChange={handleInput}
        value={comment}
        className="w-full h-32 text-sm p-4 bg-color-gray text-color-lightGray"
      />
      <button
        onClick={handlePosting}
        className="py-2 bg-color-accent absolute bottom-2 right-5 text-color-lightGray text-xl hover:opacity-75"
      >
        <MdOutlineSend />
      </button>
    </div>
  );
};

export default CommentInput;
