import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Item {
  id: number;
  imgSrc: string;
  title: string;
  content: string;
}

const items: Item[] = [
  {
    id: 1,
    imgSrc: "/src/assets/images/mvp1.png",
    title: "title",
    content: "content",
  },
  {
    id: 2,
    imgSrc: "/src/assets/images/mvp1.png",
    title: "title",
    content: "content",
  },
  {
    id: 3,
    imgSrc: "/src/assets/images/mvp1.png",
    title: "title",
    content: "content",
  },
];

export default function Section4() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const itemsEls = gsap.utils.toArray<HTMLElement>(
      section.querySelectorAll(".work-li")
    );
    const imgBoxes = gsap.utils.toArray<HTMLElement>(
      section.querySelectorAll(".imgBox")
    );
    const textBoxes = gsap.utils.toArray<HTMLElement>(
      section.querySelectorAll(".textBox")
    );

    const scrollTween = gsap.to(itemsEls, {
      xPercent: -100 * (itemsEls.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        start: "center center",
        end: `+=${100 * itemsEls.length}%`,
        // markers: true,
      },
    });

    imgBoxes.forEach((imgBox) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: imgBox,
            containerAnimation: scrollTween,
            start: "center right", // 이미지 중앙이 뷰포트 오른쪽에 닿을 때 시작
            end: "center center", // 이미지 중앙이 뷰포트 왼쪽에 닿을 때 끝
            scrub: true,
          },
        })
        .to(imgBox, { clipPath: "inset(0%)", ease: "none", duration: 1 }, 0);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: imgBox,
            containerAnimation: scrollTween,
            start: "center center",
            end: "center left",
            scrub: true,
          },
        })
        .to(imgBox, { clipPath: "inset(30%)", ease: "none", duration: 1 }, 0);
    });

    textBoxes.forEach((textBox) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: textBox,
            containerAnimation: scrollTween,
            start: "center 70%",
            end: "center 40%",
            scrub: true,
          },
        })
        .to(textBox, { opacity: 1, x: -100 }, 0);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: textBox,
            containerAnimation: scrollTween,
            start: "center 30%",
            end: "center 20%",
            scrub: true,
          },
        })
        .to(textBox, { opacity: 0 }, 0);
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf(itemsEls);
      gsap.killTweensOf(imgBoxes);
      gsap.killTweensOf(textBoxes);
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="h-screen relative">
        <ul className="flex py-[3%] px-[30%] box-border">
          {items.map((item) => (
            <li
              key={item.id}
              className="work-li w-[700px] pr-[100px] box-border flex-shrink-0"
            >
              <div
                className="imgBox relative "
                style={{ clipPath: "inset(30%)" }}
              >
                <img
                  src={item.imgSrc}
                  alt={`Image ${item.id}`}
                  className="w-full"
                />
              </div>
              <div
                className={`textBox absolute left-0 bottom-[10%] opacity-0`}
                style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}
              >
                <p className="title text-5xl">{item.title}</p>
                <p className="text text-2xl pl-1">{item.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
