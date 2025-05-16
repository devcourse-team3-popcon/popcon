type MvpCardProps = {
  title: string;
  text: string;
  imageSrc: string;
  theme: Theme;
};
type Theme = "black" | "green";

export default function MvpCard({title, text, imageSrc, theme}: MvpCardProps) {
  const themeStyles = {
    black: {
      backgroundColor: "#272727",
      textColor: "var(--white)",
    },
    green: {
      backgroundColor: "var(--primary-300)",
      textColor: "var(--bg-color)",
    },
  };
  const {backgroundColor, textColor} = themeStyles[theme];

  return (
    <div
      className='w-[210px] h-[325px] rounded-2xl shadow-md flex flex-col items-center justify-center text-center'
      style={{backgroundColor, color: textColor}}
    >
      <p className='text-sm font-bold mb-2'>{title}</p>
      <p className='text-xs  mb-4 whitespace-pre-line'>{text}</p>
      <img src={imageSrc} alt='' className='max-h-[200px] ' />
    </div>

    /* 
      <MvpCard
        theme='green'
        title='숨겨진 명곡 탐색'
        text={"공유된 숨듣명을 카드로 모아\n손쉬운 탐색 경험 제공"}
        imageSrc={BopCard}
      />
      <MvpCard
        theme='black'
        title='내한 공연 소식'
        text={"좋아하는 아티스트의 내한 일정까지\n한 번에 확인 가능"}
        imageSrc={ConcertCard}
      />
      <MvpCard
        theme='green'
        title='플레이 리스트 기반 추천'
        text={"내가 담은 음악을 바탕으로\n비슷한 감성의 음악을 자동 추천"}
        imageSrc={Playlist}
      />
    */
  );
}
