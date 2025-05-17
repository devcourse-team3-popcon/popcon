export default function AboutUsBanner() {
  return (
    <>
      <div className="hidden md:flex justify-center items-center w-full px-4 py-12">
        <p className="font-[MonumentExtended] text-center text-[42px] md:text-[55px] text-[color:var(--white)]">
          ABOUT US
        </p>
      </div>

      <div className="flex flex-col justify-center items-center w-full px-4 py-12 md:hidden">
        <p className="font-[MonumentExtended] text-center text-[42px] text-[color:var(--white)]">
          ABOUT
        </p>
        <p className="font-[MonumentExtended] text-center text-[42px] text-[color:var(--white)]">
          US
        </p>
      </div>
    </>
  );
}
