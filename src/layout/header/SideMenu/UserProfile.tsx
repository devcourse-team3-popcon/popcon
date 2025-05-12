import defaultProfile from "../../../assets/images/defaultProfile.svg";

export default function UserProfile({
  userInfo,
  parsedData,
}: UserProfileProps) {
  return (
    <div className="flex flex-col gap-4 pb-10 border-b border-[color:var(--white)]">
      {userInfo?.image ? (
        <img src={userInfo.image} alt="유저 프로필" className="w-[25px]" />
      ) : (
        <img src={defaultProfile} alt="기본 프로필" className="w-[25px]" />
      )}
      <p className="text-2xl font-medium">Hi 👋🏻</p>
      {parsedData?.name && (
        <p className="font-[MonumentExtended] text-[18px] text-[color:var(--primary-300)] uppercase">
          {parsedData.name}
        </p>
      )}
    </div>
  );
}
