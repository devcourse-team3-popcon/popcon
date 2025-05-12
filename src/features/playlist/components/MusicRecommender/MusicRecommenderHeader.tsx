export default function MusicRecommenderHeader() {
  return (
    <header className="flex px-8 gap-[16px] text-[24px] font-bold justify-between items-center">
      <div className="flex gap-4">
        <h2>POPcon 이 추천하는 음악</h2>
        <span role="img" aria-label="headphones">
          🎧
        </span>
      </div>
    </header>
  );
}
