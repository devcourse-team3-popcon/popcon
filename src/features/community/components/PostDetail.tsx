import { useState } from "react";
import Article from "../../../components/common/Article";
import Comment from "../../../components/common/Comment";
import TextAreaField from "../../../components/common/TextAreaField";

export default function PostDetail() {
  const [comment, setComment] = useState("");
  return (
    <>
      <div className="flex flex-col gap-8">
        <Article />
        <Comment />
        <TextAreaField
          label="댓글 작성"
          id="contentInput"
          name="contentInput"
          autoComplete="contentInput"
          placeholder="댓글을 입력해주세요."
          className="flex-grow w-full h-[150px]"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
      </div>
      <div className="w-full flex justify-end">
        <button className="cursor-pointer text-[14px] px-6 py-2 bg-(--primary-300)  text-(--bg-color) w-fit rounded-4xl font-semibold  mt-2">
          작성 완료
        </button>
      </div>
    </>
  );
}
