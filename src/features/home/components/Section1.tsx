export default function Section1() {
  return (
    <>
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
    </>
  );
}
