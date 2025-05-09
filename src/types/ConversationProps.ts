import { UserInfo } from "./UserInfo";

export interface ConversationProps {
  me: string;
  sender: string;
  receiver: string;
  senderId: string;
  receiverId: string;
  s_isOnline: boolean;
  r_isOnline: boolean;
  s_image: string;
  r_image: string;
  message: string;
  time: string;
  onClick?: (user: UserInfo) => void;
}
