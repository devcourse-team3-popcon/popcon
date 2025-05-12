import {Headphones} from "lucide-react";
import {NotificationRes} from "../hooks/NotificationRes";
interface Props {
  noti: NotificationRes;
  updateNotifications: (notiId: string) => void;
}

export default function NotificationItem({noti}: Props) {
  const {author, comment, like, follow, message} = noti;

  let authorName = "알 수 없음";
  try {
    const parsedFullName = JSON.parse(author.fullName);
    authorName = parsedFullName?.name?.trim() || "알 수 없음";
  } catch (e) {
    console.warn("fullName 파싱 실패", author.fullName);
  }

  const commentPost = comment?.post;
  const likePost = like?.post;
  const followId = follow?._id;

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

  return (
    <li className='group text-[14px] w-[310px] py-2 pl-2 rounded-lg flex items-center cursor-pointer hover:bg-[color:var(--grey-500)]'>
      <Headphones className='h-4 w-4' />
      <p className='pl-2 w-[280px] h-auto'>{notificationMessage}</p>
    </li>
  );
}
