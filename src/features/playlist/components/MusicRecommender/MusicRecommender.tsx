import { useState, useEffect } from "react";
import { getUserInfo } from "../../../../apis/playlist/userService";
import { useRecommendations } from "../../hooks/useRecommendations";
import MusicRecommenderHeader from "./MusicRecommenderHeader";
import RecommendedTrackList from "./RecommendedTrackList";

export default function MusicRecommender() {
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
    <section className="flex flex-col px-12 py-10 bg-[color:var(--grey-600)] rounded-[30px] gap-[32px] w-full h-[360px]">
      <MusicRecommenderHeader />

      <RecommendedTrackList
        recommendations={recommendations}
        isLoading={isLoading}
      />
    </section>
  );
}
