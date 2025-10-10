export default function HeadLine({ selected }: { selected: string }) {
  return(
  <div className="text-gray-800 text-center text-[30px] not-italic font-bold leading-9">
    {selected}에서 알바 찾고 계신가요?
  </div>
  );
}
