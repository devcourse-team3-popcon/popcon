import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section5() {
  useEffect(() => {
    gsap.from(".popcon-line", {
      y: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: ".popcon-line",
        start: "top 90%",
        end: "top 70%",
        scrub: 1,
      },
      stagger: 0.2,
    });

    gsap.to(".popcon-logo", {
      y: -10,
      duration: 0.8,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <>
      <section className="w-full h-[100vh] flex flex-col justify-center items-center gap-10">
        <div>
          <img
            src="/src/assets/images/icon_popcon2.svg"
            alt="팝콘 로고"
            className="w-20 h-20 popcon-logo"
          />
        </div>
        <div className="text-center">
          <h3 className="font-light text-2xl space-y-3">
            <p className="popcon-line">
              <span className="text-[color:var(--primary-300)]">팝콘</span>은
              지루했던 음악 생활에
            </p>
            <p className="popcon-line">
              팝콘처럼 톡톡 튀는{" "}
              <span className="text-[color:var(--primary-300)]">즐거움</span>을
              더해드립니다. 🎧🍿
            </p>
          </h3>
        </div>
      </section>
    </>
  );
}
