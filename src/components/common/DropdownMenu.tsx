import { ListMusic, LogOut, Pencil, Trash2, User } from "lucide-react";
import { useEffect, useRef } from "react";

type MenuItem = {
  label: string;
  danger?: boolean;
  onClick: () => void;
};

type DropdownMenuProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  menuItems: MenuItem[];
};

const getIconByLabel = (label: string) => {
  switch (label) {
    case "게시물 삭제":
      return <Trash2 className="w-4 h-4 mr-2" />;
    case "게시물 수정":
      return <Pencil className="w-4 h-4 mr-2" />;
    case "마이페이지":
      return <User className="w-4 h-4 mr-2" />;
    case "로그아웃":
      return <LogOut className="w-4 h-4 mr-2" />;
    case "플리에 추가":
      return <ListMusic className="w-4.5 h-4.5 mr-2" />;
    default:
      return null;
  }
};

export default function DropdownMenu({
  isOpen,
  setIsOpen,
  menuItems,
}: DropdownMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outsideClickHandler = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", outsideClickHandler);
    return () => document.removeEventListener("mousedown", outsideClickHandler);
  }, [setIsOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        ref={menuRef}
        className={`absolute right-0 mt-2 w-40 bg-[color:var(--grey-600)] shadow-md rounded-md z-50 text-[14px] text-[color:var(--white-80)]`}
      >
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              item.onClick();
              setIsOpen(false);
            }}
            className={`w-full px-4 py-3 text-left cursor-pointer hover:text-[color:var(--white)] ${
              item.danger ? "text-[color:var(--red)]" : ""
            }`}
          >
            <div className="flex items-center">
              {getIconByLabel(item.label)}
              {item.label}
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
