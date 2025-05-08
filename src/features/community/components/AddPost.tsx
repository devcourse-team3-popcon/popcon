import { useState } from "react";
import InputField from "../../../components/common/InputField";
import TextAreaField from "../../../components/common/TextAreaField";
import { useChannelId } from "../../../hooks/useChannelId";
import { useNavigate } from "react-router";
import { axiosInstance } from "../../../apis/axiosInstance";

type AddPostProps = {
  channelName: string;
};

export default function AddPost({ channelName }: AddPostProps) {
  const navigate = useNavigate();
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [imageInput, setImageInput] = useState<File | null>(null);
  const { channelId } = useChannelId(channelName);

  const createPostHandler = async () => {
    const formData = new FormData();
    formData.append("title", titleInput);
    formData.append("content", contentInput);
    formData.append("channelId", channelId!);
    formData.append("image", imageInput ? imageInput : "null");

    try {
      const response = await axiosInstance.post("/posts/create", formData);
      console.log(response);
      if (response && response.status === 201) {
        console.log(response.data);
        navigate("/community");
      } else {
        console.log("Failed to Create Post");
      }
    } catch (e) {
      console.log("Error during post creation:", e);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImageInput(event.target.files[0]);
    }
  };

  return (
    <>
      <div className="flex flex-col w-[1080px] h-auto border border-(--white) border-opacity-50 rounded-lg p-[48px] box-border gap-8">
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

            <div className="flex flex-col gap-4 ">
              <label htmlFor="imageInput">이미지 첨부하기</label>
              <input
                type="file"
                id="imageInput"
                name="imageInput"
                onChange={handleImageChange}
                className="border border-[color:var(--white-80)] px-4 rounded-[10px] text-[16px] h-10 focus:outline-none focus:border-[color:var(--primary-200)] h-[240px] w-[240px]"
              />
            </div>
          </div>
        </form>

        <div className="w-[100%] flex justify-center items-center">
          <button
            className="cursor-pointer text-[14px] px-8 py-3 bg-(--primary-300)  text-(--bg-color) w-fit rounded-4xl font-semibold"
            onClick={createPostHandler}
          >
            저장하기
          </button>
        </div>
      </div>
    </>
  );
}
