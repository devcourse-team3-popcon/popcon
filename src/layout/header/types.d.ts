interface AuthButtonsProps {
  isLoggedIn: boolean;
  toggleMenu: () => void;
}

interface NavigationMenuProps {
  isLoggedIn: boolean;
  toggleMenu: () => void;
}

interface NavItemsProps {
  handleNavigation: (path: string) => void;
}

interface MenuItemsProps {
  isLoggedIn: boolean;
  handleNavigation: (path: string) => void;
}

interface SideMenuProps {
  isLoggedIn: boolean;
}

interface UserProfileProps {
  userInfo?: UserType;
  parsedData?: ParsedDataType;
}
interface UserType {
  fullName: string;
}

interface ParsedDataType {
  name?: string;
}
interface NavigationMenuProps {
  isLoggedIn: boolean;
  toggleMenu: () => void;
  toggleNotifications: () => void;
  unseenCount: number;
}

interface NavItemsProps {
  handleNavigation: (path: string) => void;
  toggleNotifications: () => void;
  unseenCount: number;
}

interface MenuItemsProps {
  isLoggedIn: boolean;
  handleNavigation: (path: string) => void;
}
interface NotificationAuthor {
  fullName: string;
  image: string;
}

interface NotificationLike {
  post: {
    _id: string;
  };
}

interface NotificationComment {
  post: {
    _id: string;
  };
}

interface NotificationMessage {
  from: string;
  to: string;
  content: string;
  createdAt: string;
}

interface Notification {
  seen: boolean;
  author: NotificationAuthor;
  createdAt: string;
  like?: NotificationLike;
  comment?: NotificationComment;
  message?: NotificationMessage;
  post?: string;
  _id: string;
}

interface NotificationPanelProps {
  notifications: Notification[];
  isLoading: boolean;
  onClose: () => void;
  onMarkAllAsSeen: () => void;
  unseenCount: number;
}
