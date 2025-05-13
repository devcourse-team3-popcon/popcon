import { Ellipsis } from "lucide-react";
import { CommentType as CommentType } from "../../features/community/types/Comment";
import { getCurrentUserId } from "../../utils/auth";
import { parseUserName } from "../../utils/parseUserName";
import DropdownMenu from "./DropdownMenu";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../apis/axiosInstance";
import profileImg from "../../assets/images/default-profile-logo.svg";

type CommentProps = {
  comment: CommentType;
  onDelete: (commentId: string) => void;
};

export default function Comment({ comment, onDelete }: CommentProps) {
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
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

  useEffect(() => {
    const fetchUserId = async () => {
      const userId = await getCurrentUserId();
      setCurrentUserId(userId);
    };

    fetchUserId();
  }, []);

  return (
    <>
      <div className="flex flex-col px-2 py-4 border-b border-white/20">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="w-7 h-7 rounded-full mr-4"
              src={comment.author.image || profileImg}
              alt="댓글 작성자 프로필 이미지"
            />
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
                className="cursor-pointer w-4 h-4"
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
