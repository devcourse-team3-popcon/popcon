// components/MvpCard.tsx
type MvpCardProps = {
  title: string;
  text: string;
  imageSrc: string;
};

export default function MvpCard({title, text, imageSrc}: MvpCardProps) {
  return (
    <li className='work-li w-[720px] pr-[100px] box-border flex-shrink-0 ml-20'>
      <div className='imgBox relative flex justify-center items-center' style={{scale: 0.5}}>
        <img src={imageSrc} alt={title} className='h-200 rounded-md' />
      </div>
      <div
        className='textBox absolute left-0 bottom-[10%] opacity-0'
        style={{textShadow: "2px 2px 10px rgba(0,0,0,0.3)"}}
      >
        <div className='mr-[500px]'>
          <p className='title text-5xl text-right leading-snug whitespace-pre-line'>{title}</p>
          <p className='text text-2xl pl-1 pt-3 whitespace-pre-line'>{text}</p>
        </div>
      </div>
    </li>
  );
}
