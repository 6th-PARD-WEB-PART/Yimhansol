import HeadLine from "./HeadLine";

export default function LocationSection({ selected }: { selected: string }) {
  return (
    <section>
      <h1 className="flex w-[832px] h-9 justify-center items-center shrink-0">
        <div className="flex pr-2 items-start">
          <img src="/icon-47.svg" className="w-[31.266px] h-[31px]"></img>
        </div>
        <HeadLine selected={selected} />
      </h1>
    </section>
  );
}
