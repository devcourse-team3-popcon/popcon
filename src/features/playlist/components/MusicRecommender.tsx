import TrackCard from "./TrackCard";

export default function MusicRecommender() {
  return (
    <div className="flex flex-col px-12 py-10 bg-[color:var(--grey-600)] rounded-[30px] gap-[32px] w-[800px]">
      <div className="flex px-8 gap-[16px] text-[24px] font-bold">
        <p>POPcon 이 추천하는 음악</p>
        <p>🎧</p>
      </div>
      <div className="flex">
        <TrackCard />
        <TrackCard />
        <TrackCard />
        <TrackCard />
      </div>
    </div>
  );
}
