import { useLocation, useNavigate } from "react-router";
import BackButton from "../../../components/common/BackButton";
import PostInputForm from "./CommunityPostForm";
import { useState } from "react";
import { Post } from "../types/Post";
import { parseTitle } from "../../../utils/parseTitle";
import { updatePost } from "../../../utils/post";

export default function EditCommunityPost() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const post = state?.post as Post;

  const parsedTitle = parseTitle(post.title);
  const [titleInput, setTitleInput] = useState(parsedTitle.title);
  const [contentInput, setContentInput] = useState(parsedTitle.body);
  const [imageInput, setImageInput] = useState<File | null>(null);
  const existingImageUrl = post.image;
  const channelId = post.channel._id;

  const updatePostHandler = async () => {
    const jsonTitle = {
      title: titleInput,
      body: contentInput,
    };
    const imageToDeletePublicId =
      !imageInput && existingImageUrl ? post.imagePublicId : "";

    try {
      const response = await updatePost({
        postId: post._id,
        title: jsonTitle,
        channelId: channelId!,
        image: imageInput || undefined,
        imageToDeletePublicId: imageToDeletePublicId,
      });
      if (response.status === 201 || response.status === 200) {
        navigate(-1);
      }
    } catch (e) {
      console.error("게시물 수정 실패:", e);
    }
  };
  return (
    <>
      <BackButton />
      <div className="flex flex-col w-full h-auto border border-(--white) border-opacity-50 rounded-lg p-[48px] box-border gap-8">
        <span className="w-full text-center text-2xl">게시물 수정하기</span>

        <PostInputForm
          titleInput={titleInput}
          contentInput={contentInput}
          setTitleInput={setTitleInput}
          setContentInput={setContentInput}
          setImageInput={setImageInput}
          existingImageUrl={existingImageUrl}
        />
        <div className="w-[100%] flex justify-center items-center">
          <button
            className="cursor-pointer text-[14px] px-8 py-3 bg-(--primary-300)  text-(--bg-color) w-fit rounded-4xl font-semibold"
            onClick={updatePostHandler}
            disabled={!titleInput || !contentInput}
          >
            수정하기
          </button>
        </div>
      </div>
    </>
  );
}
