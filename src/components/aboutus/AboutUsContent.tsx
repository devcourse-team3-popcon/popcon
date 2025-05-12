import AboutUsMemberCard from "./AboutUsMemberCard";

export default function AboutUsContent() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-center items-center gap-22">
        <AboutUsMemberCard
          index={0}
          engname="PARK JUNGYU"
          korname="박준규"
          contact="https://github.com/parkjungyuxx"
        />
        <AboutUsMemberCard
          index={1}
          engname={"HYUN HYEJU"}
          korname={"현혜주"}
          contact={"https://github.com/hxezu"}
        />
      </div>
      <div className="flex justify-center items-center gap-22">
        <AboutUsMemberCard
          index={2}
          engname={"LEE MINJI"}
          korname={"이민지"}
          contact={"https://github.com/mjlee38"}
        />
        <AboutUsMemberCard
          index={3}
          engname={"KWON YOOJUNG "}
          korname={"권유정"}
          contact={"https://github.com/best106yj "}
        />
        <AboutUsMemberCard
          index={4}
          engname={"CHO JEONG WOO "}
          korname={"조정우"}
          contact={"https://github.com/mafornp"}
        />
      </div>
    </div>
  );
}
