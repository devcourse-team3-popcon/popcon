import { useState } from "react";
import BackButton from "../../../components/common/BackButton";
import BopPostForm from "./BopPostForm";
import { useLocation, useNavigate } from "react-router";
import { Post } from "../types/Post";
import { parseBopTitle } from "../../../utils/parseBopTitle";
import { updatePost } from "../../../utils/post";
import { BopTrack } from "../types/BopTrack";

export default function EditBopPost() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const post = state?.localPost as Post;

  const parsedBopTitle = parseBopTitle(post.title);
  const [bopTrack, setBopTrack] = useState<BopTrack | null>(
    parsedBopTitle.track
  );
  const [bopGenre, setBopGenre] = useState(parsedBopTitle.genre);
  const [bopText, setBopText] = useState(parsedBopTitle.text);

  const channelId = post.channel._id;

  const updatePostHandler = async () => {
    const jsonTitle = {
      track: bopTrack,
      genre: bopGenre,
      text: bopText,
    };
    try {
      const response = await updatePost({
        postId: post._id,
        title: jsonTitle,
        channelId: channelId!,
      });
      if (response.status === 201 || response.status === 200) {
        navigate(-1);
      }
    } catch (e) {
      console.error("게시물 수정 실패", e);
    }
  };

  return (
    <>
      <BackButton />
      <div className="flex flex-col w-full h-auto border border-(--white) border-opacity-50 rounded-lg p-[48px] box-border gap-8">
        <span className="w-full text-center text-2xl">숨듣명 수정하기</span>
        <BopPostForm
          bopTrack={bopTrack}
          bopText={bopText}
          bopGenre={bopGenre}
          setBopTrack={setBopTrack}
          setBopText={setBopText}
          setBopGenre={setBopGenre}
        />
        <div className="w-[100%] flex justify-center items-center">
          <button
            type="button"
            className="cursor-pointer text-[14px] px-8 py-3 bg-(--primary-300)  text-(--bg-color) w-fit rounded-4xl font-semibold"
            onClick={updatePostHandler}
          >
            수정하기
          </button>
        </div>
      </div>
    </>
  );
}
