import { useEffect, useRef, useState } from "react";
import { DropDownProps } from "./types/product";

export default function DropDown({
  selected,
  onSelect,
  options = ["송도동", "양덕동", "여남동", "양재동"],
}: DropDownProps) {
  const [open, setOpen] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    // 화면 아무 곳이나 클릭했을 때 실행되는 핸들러
    const onDown = (e: MouseEvent) => {
      //rootRef 영역 밖을 클릭하면 닫기
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  return (
    //ref 영역 지정
    <div ref={rootRef} className="relative inline-block ">
      {/* 버튼 전체를 토글요소로 지정 */}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className=" flex pr-4 items-start"
      >
        <div className=" hover:bg-[#374151] flex w-[119.984px] h-12 px-4 py-3 items-center rounded-[9999px] bg-[#1F2937]">
          <div className="flex pr-2 items-start">
            <img
              src="/icon-53.svg"
              className="flex w-[16.672px] h-6 justify-center items-center"
            ></img>
          </div>
          <div className="flex w-[38.641px] h-5 justify-center items-center shrink-0">
            {/* 선택된 주소 */}
            <div className="text-white text-center text-sm not-italic font-normal leading-5">
              {selected}
            </div>
          </div>
          <div className="flex pl-2 items-start">
            <div className="flex w-[16.672px] h-6 justify-center items-center">
              <img
                src="/icon-58.svg"
                className={`w-[16.656px] h-4  transition-transform duration-200 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </div>
        </div>
      </button>

      {/* dropdown */}
      {open && (
        <div
          role="listbox"
          className="absolute bg-white w-28 h-28 px-3 pb-0 flex-col border-black justify-center items-center gap-2.5 rounded-[20px] "
        >
          {options.map((opt) => (
            <button
              key={opt}
              role="option"
              aria-selected={opt === selected}
              onClick={() => {
                onSelect(opt);
                setOpen(false);
              }}
              className="hover:bg-gray-100  rounded-2xl w-full text-center justify-center text-[#374151] text-sm font-medium font-['Roboto'] leading-tight "
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
