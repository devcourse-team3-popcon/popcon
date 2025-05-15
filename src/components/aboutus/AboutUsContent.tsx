import AboutUsMemberCard from "./AboutUsMemberCard";

export default function AboutUsContent() {
  const members = [
    {
      index: 0,
      engname: "PARK JUNGYU",
      korname: "박준규",
      contact: "https://github.com/parkjungyuxx"
    },
    {
      index: 1,
      engname: "HYUN HYEJU",
      korname: "현혜주",
      contact: "https://github.com/hxezu"
    },
    {
      index: 2,
      engname: "LEE MINJI",
      korname: "이민지",
      contact: "https://github.com/mjlee38"
    },
    {
      index: 3,
      engname: "KWON YOOJUNG",
      korname: "권유정",
      contact: "https://github.com/best106yj"
    },
    {
      index: 4,
      engname: "CHO JEONG WOO",
      korname: "조정우",
      contact: "https://github.com/mafornp"
    }
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-8">
        {members.map(member => (
          <AboutUsMemberCard
            key={member.index}
            index={member.index}
            engname={member.engname}
            korname={member.korname}
            contact={member.contact}
          />
        ))}
      </div>
      <div className="hidden lg:block">
        <div className="flex justify-center items-center gap-22 mb-12">
          <AboutUsMemberCard {...members[0]} />
          <AboutUsMemberCard {...members[1]} />
        </div>
        <div className="flex justify-center items-center gap-22">
          <AboutUsMemberCard {...members[2]} />
          <AboutUsMemberCard {...members[3]} />
          <AboutUsMemberCard {...members[4]} />
        </div>
      </div>
    </div>
  );
}