import { Ellipsis } from "lucide-react";
import { Comment as CommentType } from "../../types/Comment";
import { getCurrentUserId } from "../../utils/auth";

type CommentProps = {
  comment: CommentType;
};

export default function Comment({ comment }: CommentProps) {
  const currentUserId = getCurrentUserId();

  return (
    <>
      <div className="flex flex-col px-2 pb-4 border-b border-white/20">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-amber-400 w-7 h-7 rounded-full mr-4"></div>
            <div className="flex flex-col">
              <span className="text-[14px]">{comment.author.fullName}</span>
              <span className="text-[12px] text-[color:var(--white-80)]">
                {new Date(comment.createdAt).toLocaleString("ko-KR")}
              </span>
            </div>
          </div>
          {currentUserId === comment.author._id && <Ellipsis />}
        </div>

        <p className="ml-1 mt-3 text-[13px]">{comment.comment}</p>
      </div>
    </>
  );
}
