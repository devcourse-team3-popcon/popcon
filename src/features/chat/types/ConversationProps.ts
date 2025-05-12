// import { UserInfo } from "./UserInfo";

export interface ConversationProps {
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
  onClick?: (userId: string) => void;
  isSelected?: boolean;
  selectedId?: string;
}
