import AboutUsBanner from "../components/aboutus/AboutUsBanner";
import AboutUsContent from "../components/aboutus/AboutUsContent";

export default function AboutUs() {
  return (
    <div className="flex flex-col justify-center items-center pb-20">
      <AboutUsBanner />
      <AboutUsContent />
    </div>
  );
}
