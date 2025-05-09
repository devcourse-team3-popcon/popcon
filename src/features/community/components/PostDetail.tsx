import { useEffect, useState } from "react";
import Article from "./Article";
import TextAreaField from "../../../components/common/TextAreaField";
import { useParams } from "react-router";
import { axiosInstance } from "../../../apis/axiosInstance";

export default function PostDetail() {
  const { postId } = useParams();
  const [comment, setComment] = useState("");

  const handleCommentSubmit = async () => {
    if (!comment.trim() || !postId) return;
    try {
      await axiosInstance.post("/comments/create", {
        comment: comment,
        postId,
      });
      setComment("");
    } catch (e) {
      console.error("댓글 작성 실패", e);
    }
  };

  useEffect(() => {
    console.log("게시물 ID: ", postId);
  }, [postId]);

  return (
    <>
      <div className="flex flex-col gap-8">
        <Article postId={postId} />
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
