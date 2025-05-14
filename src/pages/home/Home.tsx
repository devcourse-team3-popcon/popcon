export default function Home() {
  return (
    <>
      <main className="h-full w-full">
        <section className="h-[90vh] justify-center flex items-center overflow-hidden">
          <div className="flex-1 h-full relative">
            <div className="pl-20 items-baseline h-auto bottom-25 absolute flex flex-col gap-6">
              <div>
                <div className="w-full">
                  <img
                    src="/src/assets/images/popcon.svg"
                    alt="팝콘 로고"
                    className="absolute -top-15 right-[-30px] w-12 h-12 scale-150"
                  />
                  <h1 className="font-[MonumentExtended] text-[68px] text-[color:var(--primary-300)] ">
                    POPcon
                  </h1>
                </div>
                <h3 className="text-xl font-normal">
                  해외 팝송 팬들을 위한 커뮤니티 기반 음악 플랫폼
                </h3>
              </div>

              <span className="text-sm text-[color:var(--white-80)]">
                @2025
              </span>
            </div>
          </div>
          <div className="flex-1 relative h-full">
            <img
              src="/src/assets/images/mockup.png"
              alt=""
              className="absolute top-25 scale-110"
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
