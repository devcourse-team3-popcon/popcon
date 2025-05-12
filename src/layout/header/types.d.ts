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
