export default function AboutUsBanner() {
  return (
    <>
      <div className="hidden md:flex justify-center items-center w-full px-16  py-12">
        <p className="font-[MonumentExtended] text-start text-[55px] text-[color:var(--white)]">
          ABOUT US
        </p>
      </div>
      <div className="flex-col justify-center items-center w-full px-16  py-12 md:hidden">
        <p className="font-[MonumentExtended] text-start text-[55px] text-[color:var(--white)]">
          ABOUT
        </p>
        <p className="font-[MonumentExtended] text-center text-[55px] text-[color:var(--white)]">
          US
        </p>
      </div>
    </>
  );
}
