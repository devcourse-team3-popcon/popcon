import { useEffect, useState } from "react";
import CommunityArticle from "./CommunityArticle";
import TextAreaField from "../../../components/common/TextAreaField";
import { useParams } from "react-router";
import { axiosInstance } from "../../../apis/axiosInstance";
import { Post } from "../types/Post";
import BackButton from "../../../components/common/BackButton";

export default function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [comment, setComment] = useState("");

  const fetchPost = async () => {
    try {
      const res = await axiosInstance.get(`/posts/${postId}`);
      setPost(res.data);
    } catch (e) {
      console.error("게시글 불러오기 실패", e);
    }
  };

  useEffect(() => {
    if (!postId) return;
    fetchPost();
  }, [postId]);

  const handleCommentSubmit = async () => {
    if (!comment.trim() || !postId) return;
    try {
      await axiosInstance.post("/comments/create", {
        comment: comment,
        postId,
      });
      setComment("");
      fetchPost();
    } catch (e) {
      console.error("댓글 작성 실패", e);
    }
  };

  return (
    <>
      <BackButton />
      <div className="flex flex-col gap-8 p-4">
        <CommunityArticle post={post!} />
        <TextAreaField
          label="댓글 작성"
          id="contentInput"
          name="contentInput"
          autoComplete="contentInput"
          placeholder="댓글을 입력해주세요."
          className="flex-grow w-full h-[150px] "
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
      </div>
      <div className="w-full flex justify-end">
        <button
          className="cursor-pointer text-[14px] px-6 py-2 bg-(--primary-300)  text-(--bg-color) w-fit rounded-4xl font-semibold  mt-2"
          onClick={handleCommentSubmit}
        >
          작성 완료
        </button>
      </div>
    </>
  );
}
