import { Ellipsis } from "lucide-react";
import { CommentType as CommentType } from "../../features/community/types/Comment";
import { getCurrentUserId } from "../../utils/auth";
import { parseUserName } from "../../utils/parseUserName";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";
import { axiosInstance } from "../../apis/axiosInstance";

type CommentProps = {
  comment: CommentType;
  onDelete: (commentId: string) => void;
};

export default function Comment({ comment, onDelete }: CommentProps) {
  const currentUserId = getCurrentUserId();
  const parsedUserName = parseUserName(comment.author.fullName);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuItems = [
    {
      label: "댓글 삭제",
      onClick: () => deleteCommentHandler(comment._id),
      danger: true,
    },
  ];

  const deleteCommentHandler = async (commentId: string) => {
    try {
      await axiosInstance.delete(`/comments/delete`, {
        data: { id: commentId },
      });
      onDelete(commentId);
    } catch (e) {
      console.error("댓글 삭제 실패", e);
    }
  };

  return (
    <>
      <div className="flex flex-col px-2 py-4 border-b border-white/20">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-amber-400 w-7 h-7 rounded-full mr-4"></div>
            <div className="flex flex-col">
              <span className="text-[14px]">{parsedUserName.name}</span>
              <span className="text-[12px] text-[color:var(--white-80)]">
                {new Date(comment.createdAt).toLocaleString("ko-KR")}
              </span>
            </div>
          </div>
          {currentUserId === comment.author._id && (
            <div className="relative">
              <Ellipsis
                className="cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
              <DropdownMenu
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                menuItems={menuItems}
              />
            </div>
          )}
        </div>

        <p className="ml-1 mt-3 text-[13px]">{comment.comment}</p>
      </div>
    </>
  );
}
