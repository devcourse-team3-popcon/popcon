import { useState } from "react";
import { useChannelId } from "../../../hooks/useChannelId";
import { ChannelName } from "../types/ChannelName";
import { useNavigate } from "react-router";
import { createPost } from "../../../utils/post";
import BackButton from "../../../components/common/BackButton";
import BopPostForm from "./BopPostForm";
import { BopTrack } from "../types/BopTrack";

export default function AddBopPost({ channelName }: ChannelName) {
  const navigate = useNavigate();
  const { channelId } = useChannelId(channelName);
  const [bopTrack, setBopTrack] = useState<BopTrack | null>(null);
  const [bopGenre, setBopGenre] = useState("");
  const [bopText, setBopText] = useState("");

  const createBopHandler = async () => {
    if (!bopTrack || !bopGenre || !bopText || !channelId) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    const jsonTitle = {
      track: {
        id: bopTrack.id,
        name: bopTrack.name,
        artists: bopTrack.artists.join(", "),
        image: bopTrack.image || "",
      },
      genre: bopGenre,
      text: bopText,
    };

    try {
      const response = await createPost({
        title: jsonTitle,
        channelId,
      });
      if (response.status === 201 || response.status === 200) {
        navigate(-1);
      }
    } catch (e) {
      console.log("Error during Bop Post creation:", e);
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="flex w-full">
        <BackButton />
      </div>
      <div className="w-full h-full px-4">
        <div className="flex flex-col w-full h-auto border border-(--white) border-opacity-50 rounded-lg p-[48px] box-border gap-8">
          <span className="w-full text-center text-2xl">숨듣명 추가하기</span>
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
              onClick={createBopHandler}
            >
              저장하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
