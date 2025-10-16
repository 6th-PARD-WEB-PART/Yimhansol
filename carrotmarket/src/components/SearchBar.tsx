// index.tsx 의 검색창 컴포넌트

import { useSearchStore } from "../store/searchstore";
import { SearchBarProps } from "./types/product";
import { useState } from "react";

export default function SearchBar({ selected, onSearch }: SearchBarProps) {
  const [input, setInput] = useState("");
  const { q, setQ } = useSearchStore();

  const runSearch = () => {
    setQ(input);
    // 검색어 출력
    const msg = `${selected}에서 ${q || "null"} 을(를) 찾고 있어요!`;
    console.log(msg);
    // 부모에게 q값 전달
    onSearch?.(input);
  };

  return (
    // 검색창
    <div className="flex w-[536.016px] h-[50px] flex-col items-start shrink-0">
      {/* inline-center-wrap */}
      <div className="flex justify-center items-start self-stretch">
        {/* input */}
        <div className="flex w-[536.016px] h-[50px] px-[17px] py-[13px] items-center rounded-lg border border-[#E5E7EB] ">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            // Enter키로도 검색
            onKeyDown={(e) => e.key === "Enter" && runSearch()}
            className="w-[502.016px] text-gray-400 text-base not-italic font-medium leading-6 left-[17px] top-[13px] "
            placeholder="검색어를 입력해 주세요."
            aria-lable="검색어 입력"
          ></input>
          {/* Button */}
          <button
            type="button"
            onClick={runSearch}
            className="hover:bg-[#111827] flex w-[32.672px] h-[41px] p-2 justify-center items-start bg-[#F97316] rounded-lg right-2 top-[4.5px] mr-0"
            aria-label="검색"
          >
            <div className="flex pt-1 items-start">
              <img src="/icon-62.svg" alt="icon" className="w-[16.672px] h-4" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
