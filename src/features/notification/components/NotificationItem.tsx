import {Headphones} from "lucide-react";
import {NotificationRes} from "../types/NotificationRes";
import {useNavigate} from "react-router";

type Props = {
  noti: NotificationRes;
  updateNotifications: (notiId: string) => void;
  closeNotifications: () => void;
};

type Post = {_id: string};

export default function NotificationItem({noti, closeNotifications}: Props) {
  const navigate = useNavigate();
  const {author, comment, like, follow, message} = noti;

  let authorName = "알 수 없음";

  try {
    const parsedFullName = JSON.parse(author.fullName);
    authorName = parsedFullName?.name?.trim() || "알 수 없음";
  } catch (e) {
    console.warn("fullName 파싱 실패", author.fullName);
  }

  let notificationMessage = "";

  if (follow) {
    notificationMessage = `${authorName} 님이 나를 팔로우 했습니다.`;
  } else if (comment) {
    notificationMessage = `${authorName} 님이 내 게시물에 댓글을 남겼습니다.`;
  } else if (like) {
    notificationMessage = `${authorName} 님이 내 게시물을 좋아합니다.`;
  } else if (message) {
    notificationMessage = `${authorName} 님이 내게 메시지를 보냈습니다.`;
  } else {
    notificationMessage = `${authorName} 님의 알림입니다.`;
  }

  const clickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let currentPostId = null;
    // postId 설정
    if (comment && comment.post && typeof comment.post === "object") {
      currentPostId = comment.post._id;
    } else if (like?.post) {
      currentPostId = like.post._id;
    }

    if (currentPostId) {
      console.log("click!");
      // navigate(`/community/post/${encodeURIComponent(currentPostId)}`);

      window.location.href = `/community/post/${currentPostId}`;
    } else if (message) {
      navigate("/chat");
    } else {
      console.log("기타 알림");
    }

    closeNotifications();
  };

  return (
    <li
      className='group text-[14px] w-[310px] py-2 pl-2 rounded-lg flex items-center cursor-pointer hover:bg-[color:var(--grey-500)]'
      onClick={clickHandler}
    >
      <Headphones className='h-4 w-4' />
      <p className='pl-2 w-[280px] h-auto'>{notificationMessage}</p>
    </li>
  );
}
