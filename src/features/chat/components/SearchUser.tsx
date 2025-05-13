import { Send } from "lucide-react";
// import { UserInfo } from "../types/UserInfo";

export default function SearchUser({
  name,
  userId,
  isOnline,
  image,
  onClick,
}: {
  name: string;
  userId: string;
  isOnline: boolean;
  image: string;
  onClick?: (userId: string) => void;
}) {
  // const user = {
  //   id: userId,
  //   name: name,
  //   image: image,
  //   isOnline: isOnline,
  // };

  // console.log("프로필: ", image);

  return (
    <>
      <div
        onClick={() => onClick?.(userId)}
        className="w-full h-[64px] p-[8px] flex gap-[16px] rounded-[10px] hover:bg-[var(--grey-500)] cursor-pointer items-center"
      >
        <div>
          <div
            className={`relative size-[48px] rounded-[50px] bg-[var(--grey-200)] bg-center bg-no-repeat bg-cover`}
            style={{ backgroundImage: `url(${image})` }}
          >
            {isOnline && (
              <div className="absolute left-[36px] top-[36px] rounded-full size-[10px] bg-[var(--primary-300)]"></div>
            )}
          </div>
        </div>

        <div className="flex flex-1 items-center justify-between p-0.5 gap-[8px] w-[10%]">
          <div className="text-base font-medium truncate flex-1">{name}</div>
          <Send size={20} />
        </div>
      </div>
    </>
  );
}
