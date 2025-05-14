export default function Home() {
  return (
    <>
      <main className="h-full w-full">
        <section className="h-[95vh] justify-center flex items-center overflow-hidden">
          <div className="flex-1 h-full relative w-full ">
            <div className="pl-40 items-baseline h-auto bottom-40 absolute flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <div className="relative inline-block w-fit">
                  <img
                    src="/src/assets/images/popcon.svg"
                    alt="팝콘 로고"
                    className="absolute -top-10 -right-18 w-10 h-10 sm:w-12 sm:h-12 scale-150"
                  />
                  <h1 className="font-[MonumentExtended] text-4xl sm:text-[56px] lg:text-[72px] text-[color:var(--primary-300)] ">
                    POPcon
                  </h1>
                </div>
                <h3 className="font-light text-base sm:text-lg lg:text-2xl ">
                  해외 팝송 팬들을 위한 커뮤니티 기반 음악 플랫폼 : 팝콘
                </h3>
              </div>

              <span className="text-xs sm:text-sm text-[color:var(--white-80)]">
                @2025
              </span>
            </div>
          </div>
          <div className="flex-1 relative w-full flex justify-center">
            <img
              src="/src/assets/images/section1.svg"
              alt="목업 이미지"
              className=" w-[80%] sm:w-[70%] lg:w-[90%] -top-70 absolute scale-110 object-contain"
            />
          </div>
        </section>
        <section className="h-[100vh] bg-[color:var(--primary-300)] text-[color:var(--bg-color)] relative pt-30">
          <h3 className="w-full text-center p-6">Overview</h3>
          <div className="flex flex-col w-full items-center font-bold text-4xl leading-16 p-10">
            <p>해외 팝송을 좋아하는 사람들을 위한,</p>
            <p>노래 추천부터 숨은 명곡, 내한 공연 정보까지</p>
          </div>

          <div className="flex flex-col w-full items-center font-light text-xl p-2">
            <p>
              지금까지의 음악 서비스가 단순한 스트리밍에 머물렀다면, 팝콘은{" "}
              <span className="font-normal">취향 기반 추천</span>,{" "}
            </p>
            <p>
              <span className="font-normal">커뮤니티</span>, 그리고{" "}
              <span className="font-normal">콘서트 정보</span>까지 더한 새로운
              음악 플랫폼을 제안합니다.
            </p>
          </div>

          <img
            src="/src/assets/images/section2.svg"
            alt=""
            className="absolute -bottom-3 left-[25%]"
          />
        </section>

        <section className="h-[100vh] text-[color:var(--primary-300)]"></section>
      </main>
    </>
  );
}
