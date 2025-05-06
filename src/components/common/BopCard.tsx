export default function BopCard() {
  return (
    <>
      <div className="w-60 bg-[#55555534] p-4 rounded-2xl flex flex-col gap-4">
        <img className="w-[208px] h-[208px] bg-[#c2c2c2] rounded-2xl" />

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[20px] font-bold">Luther</span>
            <span className="text-[12px] font-light ">Kendrick Lamar</span>
            <span className="text-[10px] font-light ">RAP/HIPHOP</span>
          </div>

          <span className="text-[12px] font-light ">
            Recommended By.
            <span className="text-[color:var(--primary-300)]"> Lamar</span>
          </span>
        </div>
      </div>
    </>
  );
}
