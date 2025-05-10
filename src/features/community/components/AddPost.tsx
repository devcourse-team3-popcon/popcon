import { useState } from "react";
import InputField from "../../../components/common/InputField";
import TextAreaField from "../../../components/common/TextAreaField";
import { useChannelId } from "../../../hooks/useChannelId";
import { useNavigate } from "react-router";
import { ChannelName } from "../types/ChannelName";
import ImageUploader from "../../../components/common/ImageUploader";
import { createPost } from "../../../utils/post";
import BackButton from "../../../components/common/BackButton";

export default function AddPost({ channelName }: ChannelName) {
  const navigate = useNavigate();
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [imageInput, setImageInput] = useState<File | null>(null);
  const { channelId } = useChannelId(channelName);

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
        navigate(-1);
      }
    } catch (e) {
      console.log("Error during post creation:", e);
    }
  };

  return (
    <>
      <BackButton />
      <div className="flex flex-col w-full h-auto border border-(--white) border-opacity-50 rounded-lg p-[48px] box-border gap-8">
        <span className="w-full text-center text-2xl">게시물 추가하기</span>
        <form className="flex flex-col gap-8">
          <InputField
            label="게시물 제목 *"
            id="titleInput"
            name="titleInput"
            value={titleInput}
            placeholder="제목을 입력해주세요."
            type="text"
            autoComplete="titleInput"
            onChange={(e) => {
              setTitleInput(e.target.value);
            }}
            className="w-[100%]"
          />

          <div className="flex gap-4 w-full">
            <TextAreaField
              label="게시물 내용 *"
              id="contentInput"
              name="contentInput"
              autoComplete="contentInput"
              placeholder="내용을 입력해주세요."
              className="flex-grow w-full"
              value={contentInput}
              onChange={(e) => {
                setContentInput(e.target.value);
              }}
            />

            <ImageUploader onImageChange={setImageInput} />
          </div>
        </form>

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
    </>
  );
}
