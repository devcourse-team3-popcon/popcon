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
    <section className="flex flex-col py-13 md:px-12 md:py-10 md:bg-[color:var(--grey-600)] rounded-[30px] gap-[35px] xl:py-6 xl:gap-[32px] 2xl:py-12 2xl:px-10  w-full h-full md:h-[360px] xl:h-70 2xl:h-90">
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
