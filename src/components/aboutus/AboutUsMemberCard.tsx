import icon1 from "../../assets/images/icon_popcon1.svg";
import icon2 from "../../assets/images/icon_popcon2.svg";
import icon3 from "../../assets/images/icon_popcon3.svg";
import icon4 from "../../assets/images/icon_popcon4.svg";
import icon5 from "../../assets/images/icon_popcon5.svg";

interface AboutusMemberCardProps {
  index: number;
  engname: string;
  korname: string;
  contact: string;
}

export default function AboutUsMemberCard({
  index,
  engname,
  korname,
  contact,
}: AboutusMemberCardProps) {
  const icon = [icon1, icon2, icon3, icon4, icon5];
  return (
    <div>
      <img src={icon[index]} alt={`${korname} 팝콘 아이콘`} />
      <div>
        <div>
          <p>{engname}</p>
          <p>{korname}</p>
        </div>
        <p>FRONTEND DEVELOPER</p>
        <p>{contact}</p>
      </div>
    </div>
  );
}
