import { useState, useEffect } from "react";
import { getUserInfo } from "../../../../apis/playlist/userService";
import { useRecommendations } from "../../hooks/useRecommendations";
import MusicRecommenderHeader from "./MusicRecommenderHeader";
import RecommendedTrackList from "./RecommendedTrackList";

export default function MusicRecommender({
  setCurrentVideo,
  currentVideo,
}: CurrentVideoProps) {
  const [user, setUser] = useState<UserType | null>(null);
  const { recommendations, isLoading } = useRecommendations(user);

  useEffect(() => {
    const getUserData = async () => {
      const data = await getUserInfo();
      setUser(data);
    };
    getUserData();
  }, []);

  return (
    <section className="flex flex-col py-13 md:px-12 md:py-8 md:bg-[color:var(--grey-600)] rounded-[30px] w-full h-[40%] min-h-60">
      <MusicRecommenderHeader />

      <RecommendedTrackList
        recommendations={recommendations}
        isLoading={isLoading}
        setCurrentVideo={setCurrentVideo}
        currentVideo={currentVideo}
      />
    </section>
  );
}
