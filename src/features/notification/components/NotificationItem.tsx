import {NotificationRes} from "../types/NotificationRes";
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import profile from "../../../assets/images/default-profile-logo.svg";
import {axiosInstance} from "../../../apis/axiosInstance";

type Props = {
  noti: NotificationRes;
  updateNotifications: (notiId: string) => void;
  closeNotifications: () => void;
};

export default function NotificationItem({noti, closeNotifications}: Props) {
  const navigate = useNavigate();
  const {author, comment, like, follow, message} = noti;

  const [authorImage, setAuthorImage] = useState(profile);

  useEffect(() => {
    const fetchAuthorImage = async () => {
      try {
        const res = await axiosInstance.get(`/users/${author._id}`);
        const user = await res.data;
        if (user.image) setAuthorImage(user.image);
      } catch (err) {
        console.warn("유저 이미지 불러오기 실패", err);
      }
    };

    fetchAuthorImage();
  }, [author._id]);

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

    let post = null;
    if (comment && comment.post && typeof comment.post === "object") {
      post = comment.post;
    } else if (like?.post) {
      post = like.post;
    }

    if (post && post.channel) {
      const channelId = post.channel;
      const postId = post._id;

      if (channelId === "681e2fbc7380bb759ecc6367") {
        navigate("/community/bops-community");
      } else {
        const channelPath =
          channelId === "681e2fdd7380bb759ecc636d" ? "concert-community" : "open-community";
        navigate(`/community/${channelPath}/post/${encodeURIComponent(postId)}`);
      }
    } else if (message) {
      navigate(`/chat/${author._id}`);
    } else {
      console.log("기타 알림");
    }

    closeNotifications();
  };

  return (
    <li
      className='group text-[12px] w-[288px] p-2 rounded-lg flex items-center cursor-pointer hover:bg-[color:var(--grey-500)]'
      onClick={clickHandler}
    >
      <img src={authorImage} className='w-6 h-6 rounded-4xl' />
      <p className='pl-3 w-[247px] h-auto'>{notificationMessage}</p>
    </li>
  );
}
