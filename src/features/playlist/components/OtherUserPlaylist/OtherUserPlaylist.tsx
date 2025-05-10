import { useOtherUserPlaylist } from "../../hooks/useOtherUserPlaylist";
import { PlaylistContent } from "./PlaylistContent";
import { PlaylistHeader } from "./PlaylistHeader";

export default function OtherUserPlaylist({
  selectedUserId,
  setSelectedUserId,
}: {
  selectedUserId: string;
  setSelectedUserId: (id: string) => void;
}) {
  const { 
    selectedUserName, 
    parsedData, 
    userPlaylist, 
    myId, 
    isLoading 
  } = useOtherUserPlaylist(selectedUserId);

  const displayName = parsedData ? parsedData.name : selectedUserName;

  return (
    <section className="flex flex-col p-[48px] bg-[color:var(--grey-600)] w-full h-[408px] rounded-[30px] gap-[12px]">
      <PlaylistHeader
        displayName={displayName}
        onBack={() => setSelectedUserId(myId)}
      />
      
      <PlaylistContent
        userPlaylist={userPlaylist}
        isLoading={isLoading}
      />
    </section>
  );
}