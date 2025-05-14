export default function Home() {
  return (
    <>
      <main className="h-full w-full">
        <section className="h-[95vh] justify-center flex items-center overflow-hidden">
          <div className="flex-1 h-full relative w-full ">
            <div className="pl-20 items-baseline h-auto bottom-30 absolute flex flex-col gap-6">
              <div>
                <div className="relative inline-block w-fit">
                  <img
                    src="/src/assets/images/popcon.svg"
                    alt="팝콘 로고"
                    className="absolute -top-8 -right-18 w-10 h-10 sm:w-12 sm:h-12 scale-150"
                  />
                  <h1 className="font-[MonumentExtended] text-[48px] sm:text-[56px] lg:text-[68px] text-[color:var(--primary-300)] ">
                    POPcon
                  </h1>
                </div>
                <h3 className="font-normal text-base sm:text-lg lg:text-xl ">
                  해외 팝송 팬들을 위한 커뮤니티 기반 음악 플랫폼
                </h3>
              </div>

              <span className="text-xs sm:text-sm text-[color:var(--white-80)]">
                @2025
              </span>
            </div>
          </div>
          <div className="flex-1 relative w-full flex justify-center">
            <img
              src="/src/assets/images/mockup.png"
              alt=""
              className=" w-[80%] sm:w-[70%] lg:w-[90%] -top-50 absolute scale-110 object-contain"
            />
          </div>
        </section>
        <section className="h-[100vh] bg-[color:var(--primary-300)]">
          <div>dqw</div>
        </section>
      </main>
    </>
  );
}
