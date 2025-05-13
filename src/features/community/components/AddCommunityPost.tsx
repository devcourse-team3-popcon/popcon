import { useState } from "react";
import { useChannelId } from "../../../hooks/useChannelId";
import { useNavigate } from "react-router";
import { ChannelName } from "../types/ChannelName";
import { createPost } from "../../../utils/post";
import BackButton from "../../../components/common/BackButton";
import PostInputForm from "./CommunityPostForm";
import StatusModal from "../../../components/common/StatusModal";

export default function AddPost({ channelName }: ChannelName) {
  const navigate = useNavigate();
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [imageInput, setImageInput] = useState<File | null>(null);
  const { channelId } = useChannelId(channelName);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const createPostHandler = async () => {
    const jsonTitle = {
      title: titleInput,
      body: contentInput,
    };
    console.log(jsonTitle);

    try {
      const response = await createPost({
        title: jsonTitle,
        channelId: channelId!,
        image: imageInput || undefined,
      });
      if (response.status === 201 || response.status === 200) {
        setShowSuccessModal(true);
      }
    } catch (e) {
      console.log("Error during post creation:", e);
    }
  };

  const closeModalHandler = () => {
    setShowSuccessModal(false);
    navigate(-1);
  };

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="flex w-full">
        <BackButton />
      </div>
      <div className="w-full h-full px-4">
        <div className="flex flex-col w-full h-auto border border-(--white) border-opacity-50 rounded-lg p-[48px] box-border gap-8">
          <span className="w-full text-center text-2xl">게시물 추가하기</span>

          <PostInputForm
            titleInput={titleInput}
            contentInput={contentInput}
            setTitleInput={setTitleInput}
            setContentInput={setContentInput}
            setImageInput={setImageInput}
          />
          <div className="w-[100%] flex justify-center items-center">
            <button
              className="cursor-pointer text-[14px] px-8 py-3 bg-(--primary-300)  text-(--bg-color) w-fit rounded-4xl font-semibold"
              onClick={createPostHandler}
              disabled={!titleInput || !contentInput}
            >
              저장하기
            </button>
          </div>
        </div>
      </div>

      {showSuccessModal && (
        <StatusModal
          message="성공적으로 저장되었습니다."
          onClose={closeModalHandler}
        />
      )}
    </div>
  );
}
