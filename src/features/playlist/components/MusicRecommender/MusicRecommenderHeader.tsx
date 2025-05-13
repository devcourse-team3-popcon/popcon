export default function MusicRecommenderHeader() {
  return (
    <header className="flex 2xl:px-8 gap-[16px] 2xl:text-[24px] font-bold justify-between items-center">
      <div className="hidden md:flex gap-4">
        <h2>POPcon 이 추천하는 음악</h2>
        <span role="img" aria-label="headphones">
          🎧
        </span>
      </div>
      <div className="flex md:hidden gap-4 font-bold text-[14px]">
        <h2>
          <span className="text-[color:var(--primary-300)]">POPCON</span> 이
          추천하는 음악
        </h2>
        <span role="img" aria-label="headphones">
          🎧
        </span>
      </div>
    </header>
  );
}
