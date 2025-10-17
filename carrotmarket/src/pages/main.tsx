import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/modal/ProductModal";
import type { Product } from "@/components/types/product";
import { useSearchStore } from "@/store/searchstore";
import MobileFilterModal from "@/components/modal/MobileFilterModal";

export default function Main() {
  // 상품 카드 배열
  const products: Product[] = [
    {
      name: "아이폰 14 프로 128GB 퍼플 깨끗한 상태",
      price: 850000,
      location: "송도동",
      timeago: "몇초 전",
      images: "undefined",
    },
    {
      name: "아이폰 14 프로 128GB 퍼플 깨끗한 상태",
      price: 850000,
      location: "송도동",
      timeago: "몇초 전",
      images: "undefined",
    },
    {
      name: "아이폰 14 프로 128GB 퍼플 깨끗한 상태",
      price: 850000,
      location: "송도동",
      timeago: "몇초 전",
      images: "undefined",
    },
    {
      name: "길벗고 들일 소맥기도 4마리 360도 어울이브라미",
      price: 20000,
      location: "송도동",
      timeago: "몇초 전",
      images: "undefined",
    },
    {
      name: "아이폰 14 프로 128GB 퍼플 깨끗한 상태",
      price: 850000,
      location: "송도동",
      timeago: "몇초 전",
      images: "undefined",
    },
    {
      name: "아이폰 14 프로 128GB 퍼플 깨끗한 상태",
      price: 850000,
      location: "송도동",
      timeago: "몇초 전",
      images: "undefined",
    },
    {
      name: "아이폰 14 프로 128GB 퍼플 깨끗한 상태",
      price: 850000,
      location: "송도동",
      timeago: "몇초 전",
      images: "undefined",
    },
  ];
  // 모달 상태 관리
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Product | null>(null);

  // 모달 핸들러(자세히 보기)
  const handleDetail = (p: Product) => {
    setActive(p);
    setOpen(true);
  };
  //글쓰기버튼 -> 모달
  const handleCreate = () => {
    const exampleProduct = products[3];
    setActive(exampleProduct);
    setOpen(true);
  };
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [menuOpen, setOpenMenu] = useState(false);

  const searchproduct = useSearchStore((s) => s.q);

  return (
    // DESKTOP

    <div className="min-h-screen bg-[#F9FAFB]">
      {/* HEADER-4 */}
      <header className="w-full border-b border-[#E5E7EB] bg-white">
        <div className="mx-auto w-full max-w-screen-xl h-16 px-4 md:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="shrink-0">
              <img src="/carrotimage.png" className="h-10 w-auto"></img>
            </Link>
            <div className="flex items-start pl-8 max-md:hidden">
              <div className="flex w-[467.922px] h-6 items-start max-md:hidden">
                <div className="flex w-[58.891px] h-6 items-center shrink-0 text-[#374151] font-roboto text-base not-italic font-medium leading-6 ">
                  중고거래
                </div>
                <div className="flex pl-6 items-start text-[#374151] font-roboto text-base not-italic font-medium leading-6">
                  <div className="flex items-center">부동산</div>
                  <div className="flex pl-6 items-center">중고차</div>
                  <div className="flex pl-6 items-center">알바</div>
                  <div className="flex pl-6 items-center">동네업체</div>
                  <div className="flex pl-6 items-center">동네생활</div>
                  <div className="flex pl-6 items-center">모임</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center shrink-0">
            <div className="flex w-[87.984px] h-6 items-center shrink-0">
              <div className="flex w-[16.672px] h-6 items-center shrink-0">
                <img
                  src="/icon-35.svg"
                  className="w-[16.656px] h-4 absolute"
                ></img>
              </div>

              <div className="flex pl-2 items-start">
                <div className="flex w-[38.641px] h-5 items-center">
                  <div className="text-gray-700 text-sm not-italic font-normal leading-5">
                    송도동
                  </div>
                </div>
              </div>

              <div className="flex pl-2 items-start">
                <div className="flex w-[16.672px] h-6 items-center">
                  <img
                    src="/icon-40.svg"
                    className="w-[16.656px] h-4 absolute top-1 mt-5"
                  ></img>
                </div>
              </div>
            </div>
            {/* hamberger for mobile */}
            <button
              className="md:hidden flex ml-2"
              onClick={() => setOpenMenu(true)}
            >
              <img src="ci_hamburger-md.svg" />
            </button>
            <div className="flex pl-4 items-start max-md:hidden">
              <button
                type="button"
                onClick={handleCreate}
                className="flex w-[76.172px] h-10 py-2 px-4 justify-center items-center rounded-lg bg-orange-500"
              >
                <div className="text-white text-center text-base font-medium leading-6">
                  글쓰기
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Frame2 */}
      <div className="flex w-full max-w-screen-xl mx-auto p-4  flex-col justify-center items-center gap-2 border border-b-0 border-[#E5E7EB] bg-white ">
        {/* Frame 5 */}
        <div className="flex flex-col items-start gap-[10px]">
          {/* Frame 4 */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-[10px] w-full">
            {/* INPUT */}
            <div className="flex w-full md:w-[1000px] h-[55px] p-2 justify-center items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white">
              {/* Frame3 */}
              <div className="flex justify-between items-center flex-[1_0_0]">
                {/* input */}
                <div className="flex-1 text-gray-400 text-base font-medium">
                  물건이름을 입력해주세요
                </div>
                {/* BUTTON-61 */}
                <button className="flex w-[32.672px] h-[41px] p-2 justify-center items-start rounded-lg bg-orange-500">
                  <div className="flex pt-1 items-start">
                    <img src="/icon-62.svg" className="w-[16.672px] h-4" />
                  </div>
                </button>
              </div>
            </div>

            {/* 검색바 옆 위치정보 (Desktop) */}
            <div className="hidden md:flex pl-4 items-start">
              <div className="flex w-[93.516px] h-6 items-center">
                <div className="flex w-[16.672px] h-6 items-center shrink-0">
                  <img src="/icon-47.svg" className="w-[16.656px] h-4" />
                </div>
                <div className="flex pl-2 items-start">
                  <div className="flex w-[44.172px] h-6 items-center">
                    <div className="text-gray-700 text-base not-italic font-normal leading-6">
                      송도동
                    </div>
                  </div>
                  <div className="flex pl-2 items-start">
                    <div className="flex w-[16.672px] h-6 items-center">
                      <img
                        src="/icon-40.svg"
                        className="w-[16.656px] h-4 top-1"
                      />
                    </div>
                  </div>
                </div>

                {/* 검색바 아래 위치정보 (Mobile 전용) */}
                <div className="flex md:hidden justify-center items-center gap-2 pt-2">
                  <div className="flex items-center text-gray-600 text-sm">
                    <img src="/icon-47.svg" className="w-4 h-4 mr-1" />
                    송도동
                    <img src="/icon-40.svg" className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* DIV-59 */}
        </div>
      </div>
      <div className="flex w-full max-w-screen-xl mx-auto p-4 gap-2 border border-t-0 border-[#E5E7EB] bg-white">
        {/* Frame 5 */}

        <div className="flex sm:ml-0 ml-15 -mt-6 gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
          {[
            "#에어팟",
            "#아이폰",
            "#삼성",
            "#냉장고",
            "#자전거",
            "#노트북",
            "#의자",
            "#책상",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700 shrink-0"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Frame6 */}
      <main className="flex w-full max-w-screen-xl mx-auto py-6 px-4 md:px-6 lg:px-8 justify-center items-start gap-6">
        {/* Frame 8 */}
        <div className="flex w-[260px] p-4 flex-col items-start gap-[10px] rounded-lg bg-white max-md:hidden">
          {/* DIV-89 */}
          <div className="flex h-6 justify-between items-center self-stretch">
            {/* H3-90 */}
            <div className="flex w-[29.453px] h-6 items-center">
              <div className="text-gray-900 text-base not-italic font-semibold leading-6">
                필터
              </div>
            </div>
            {/* BUTTON-93 */}
            <div className="flex w-[38.641px] h-5 justify-center items-center">
              <div className="text-orange-500 text-center text-sm not-italic font-normal leading-5">
                초기화
              </div>
            </div>
          </div>

          {/* DIV-96 */}
          <div className="flex w-[224px] h-5 flex-col items-start">
            {/* LABEL-97 */}
            <div className="flex w-[224px] h-5 items-center shrink-0">
              {/* INPUT-98 */}
              <div className="flex w-[13px] h-[13px] flex-col items-start shrink-0">
                <img src="checkbox-99.svg" className="w-[13px] h-[13px]"></img>
              </div>
              {/* margin-wrap */}
              <div className="flex pl-2 items-start">
                <div className="flex w-[98px] h-5 items-center">
                  <div className="text-gray-700 text-sm not-italic font-normal leading-5">
                    거래 가능만 보기
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* margin-wrap */}
          <div className="flex items-start">
            {/* DIV-103 */}
            <div className="flex w-[224px] h-[254px] flex-col items-start">
              {/* margin-wrap */}
              <div className="flex pb-3 items-start">
                <div className="flex w-[224px] h-6 items-center">
                  <div className="text-[#111827] font-roboto text-base not-italic font-medium leading-6">
                    위치
                  </div>
                </div>
              </div>

              {/* margin-wrap */}
              <div className="flex pb-2 items-start">
                {/* DIV-107 */}
                <div className="flex w-[224px] h-5 items-center">
                  <div className="text-gray-600 font-roboto text-sm not-italic font-normal leading-5">
                    인천광역시 연수구
                  </div>
                </div>
              </div>

              {/* DIV-110 */}
              <div className="flex w-[224px] h-[160px] max-h-[192px] flex-col items-start shrink-0">
                {/* ㅣLABEL-111 */}
                <div className="flex w-[224px] h-5 items-center shrink-0">
                  {/* INPUT-112 */}
                  <div className="flex w-[13px] h-[13px] flex-col items-start shrink-0">
                    <img
                      src="/radio-113.svg"
                      className="w-[13px] h-[13px]"
                    ></img>
                  </div>
                  {/* margin-wrap */}
                  <div className="flex pl-2 items-start">
                    <div className="flex w-[38.641px] h-5 items-center">
                      <div className="text-[#374151] font-roboto text-sm not-italic font-normal leading-5">
                        송도동
                      </div>
                    </div>
                  </div>
                </div>
                {/* margin-wrap */}
                <div className="flex pt-2 items-start">
                  {/* LABEL */}
                  <div className="flex w-[224px] h-5 items-center">
                    {/* INPUT */}
                    <div className="flex w-[13px] h-[13px] flex-col items-start shrink-0">
                      <img
                        src="/radio-119.svg"
                        className="w-[13px] h-[13px]"
                      ></img>
                    </div>
                    {/* margin-wrap */}
                    <div className="flex pl-2 items-start">
                      <div className="flex h-5 items-center">
                        <div className="text-[#374151] font-roboto text-sm not-italic font-normal leading-5">
                          송도 1동
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* margin-wrap */}
                <div className="flex pt-2 items-start">
                  {/* LABEL */}
                  <div className="flex w-[224px] h-5 items-center">
                    {/* INPUT */}
                    <div className="flex w-[13px] h-[13px] flex-col items-start shrink-0">
                      <img
                        src="/radio-119.svg"
                        className="w-[13px] h-[13px]"
                      ></img>
                    </div>
                    {/* margin-wrap */}
                    <div className="flex pl-2 items-start">
                      <div className="flex h-5 items-center">
                        <div className="text-[#374151] font-roboto text-sm not-italic font-normal leading-5">
                          송도 2동
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* margin-wrap */}
                <div className="flex pt-2 items-start">
                  {/* LABEL */}
                  <div className="flex w-[224px] h-5 items-center">
                    {/* INPUT */}
                    <div className="flex w-[13px] h-[13px] flex-col items-start shrink-0">
                      <img
                        src="/radio-119.svg"
                        className="w-[13px] h-[13px]"
                      ></img>
                    </div>
                    {/* margin-wrap */}
                    <div className="flex pl-2 items-start">
                      <div className="flex h-5 items-center">
                        <div className="text-[#374151] font-roboto text-sm not-italic font-normal leading-5">
                          연수동
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* margin-wrap */}
                <div className="flex pt-2 items-start">
                  {/* LABEL */}
                  <div className="flex w-[224px] h-5 items-center">
                    {/* INPUT */}
                    <div className="flex w-[13px] h-[13px] flex-col items-start shrink-0">
                      <img
                        src="/radio-119.svg"
                        className="w-[13px] h-[13px]"
                      ></img>
                    </div>
                    {/* margin-wrap */}
                    <div className="flex pl-2 items-start">
                      <div className="flex h-5 items-center">
                        <div className="text-[#374151] font-roboto text-sm not-italic font-normal leading-5">
                          동춘동
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* margin-wrap */}
                <div className="flex pt-2 items-start">
                  {/* LABEL */}
                  <div className="flex w-[224px] h-5 items-center">
                    {/* INPUT */}
                    <div className="flex w-[13px] h-[13px] flex-col items-start shrink-0">
                      <img
                        src="/radio-119.svg"
                        className="w-[13px] h-[13px]"
                      ></img>
                    </div>
                    {/* margin-wrap */}
                    <div className="flex pl-2 items-start">
                      <div className="flex h-5 items-center">
                        <div className="text-[#374151] font-roboto text-sm not-italic font-normal leading-5">
                          청학동
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* margin-wrap */}
              <div className="flex pt-2 items-start">
                {/* BUTTON-147 */}
                <div className="flex w-[38.641px] h-5 justify-center items-center">
                  <div className="text-orange-500 text-center font-roboto text-sm not-italic font-normal leading-5">
                    더보기
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frame 7 */}
        <div className="flex w-full flex-col items-start gap-4">
          {/* DIV-151 */}
          <div className="flex w-full h-7 flex-col items-start shrink-0 ">
            {/* H1-152 */}
            <div className="flex h-7 items-center shrink-0">
              <div className="text-[#111827] font-roboto text-xl not-italic font-bold leading-7">
                {/* 검색바에서 검색어 입력시 상품명 변경 검색어 null시 전체상품 */}
                {searchproduct ? searchproduct : "전체상품"}
              </div>

              {/* 모바일 필터버튼 */}

              <button
                onClick={() => setIsFilterOpen(true)}
                className="w-18 bg-gray-400 rounded-[50px] inline-flex justify-center items-center"
              >
                <div className="justify-center text-white text-sm font-normal font-['Roboto'] leading-tight">
                  필터
                </div>
                <div className="pl-2 flex">
                  <div className="w-4 h-6 relative flex justify-start items-center">
                    <img src="Icon-40 (1).svg" />
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Frame 10 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {products.map((p) => (
              <div key={p.name} className="max-md:flex-[0_0_48%] ">
                <div className="w-full">
                  <ProductCard product={p} onDetail={handleDetail} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <ProductModal
        open={open}
        product={active}
        onClose={() => setOpen(false)}
      />
      {menuOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* 어둡게: 배경 클릭하면 닫힘 */}
          <button
            aria-label="메뉴 닫기"
            onClick={() => setOpenMenu(false)}
            className="absolute inset-0 bg-black/40"
          />

          {/* 우측 패널 */}
          <aside
            role="dialog"
            aria-modal="true"
            className="absolute right-0 top-0 h-full w-72 bg-gray-50 shadow-[0_0_20px_rgba(0,0,0,0.25)] translate-x-0 transition-transform duration-300 overflow-y-auto"
          >
            {/* 상단 닫기 */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setOpenMenu(false)}
                aria-label="메뉴 닫기"
                className="text-gray-700"
              >
                <span className="text-lg tracking-widest">|||</span>
              </button>
            </div>

            {/* 메뉴 리스트 */}
            <nav className="px-8">
              <ul className="space-y-5 text-gray-700 text-[18px] leading-normal">
                <li>
                  <button className="hover:text-gray-900">중고거래</button>
                </li>
                <li>
                  <button className="hover:text-gray-900">부동산</button>
                </li>
                <li>
                  <button className="hover:text-gray-900">중고차</button>
                </li>
                <li>
                  <button className="hover:text-gray-900">알바</button>
                </li>
                <li>
                  <button className="hover:text-gray-900">동네업체</button>
                </li>
                <li>
                  <button className="hover:text-gray-900">동네생활</button>
                </li>
                <li>
                  <button className="hover:text-gray-900">모임</button>
                </li>
              </ul>

              {/* 글쓰기 버튼 */}
              <div className="mt-8 flex justify-center">
                <button className="px-5 py-2 rounded-md bg-orange-500 text-white text-[15px]">
                  글쓰기
                </button>
              </div>
            </nav>
            <div className="h-6" />
          </aside>
        </div>
      )}
      <MobileFilterModal
        open={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
}
