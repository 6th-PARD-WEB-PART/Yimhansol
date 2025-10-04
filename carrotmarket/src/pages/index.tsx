import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="bg-[#F9FAFB] w-[1440px] h-[1024px]">
      <header className=" bg-white w-full flex py-2.5 px-0 flex-col justify-center items-center border-b border-[#E5E7EB]">
        <div className="flex w-[1200px] h-16 justify-between items-center">
          <div className="flex w-[560.844px] h-[40px] items-center shrink-0">
            <div className="flex w-[61px] h-10 items-center shrink-0">
              <img
                src="/carrotimage.png"
                className="w-[60.922px] h-10 max-w-[60.922px] shrink-0"
              ></img>
            </div>
            <div className="flex items-start pl-8">
              <div className="flex w-[467.922px] h-6 items-start">
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
          <div className="flex w-[180.156px] h-10 items-center shrink-0">
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
                    className="w-[16.656px] h-4 absolute top-1 mt-8"
                  ></img>
                </div>
              </div>
            </div>
            <div className="flex pl-4 items-start">
              <button className="flex w-[76.172px] h-10 py-2 px-4 justify-center items-center rounded-lg bg-orange-500">
                <div className="text-white text-center text-base font-medium leading-6">
                  글쓰기
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Frame 2 */}
      <main className="flex w-[1440px] h-[247px] p-2.5 flex-col justify-center items-center gap-2.5 shrink-0 bg-white">
        <div className="flex w-[896px] h-[258px] max-w-[896px] py-12 px-8 flex-col items-start shrink-0">
          {/* H1-46 */}
          <h1 className="flex w-[832px] h-9 justify-center items-center shrink-0">
            <div className="flex pr-2 items-start">
              <img src="/icon-47.svg" className="w-[31.266px] h-[31px]"></img>
            </div>
            <div className="text-gray-800 text-center text-[30px] not-italic font-bold leading-9">
              송도동에서 알바 찾고 계신가요?
            </div>
          </h1>

          {/* margin-wrap */}
          <div className="flex pt-8 pr-20 pl-20 items-start">
            {/* 상단 검색바 */}
            <div className="flex w-[672px] max-w-[672px] justify-center items-center">
              {/* 위치지정 div */}
              <div className="flex pr-4 items-start">
                <div className=" hover:bg-black flex w-[119.984px] h-12 px-4 py-3 items-center rounded-[9999px] bg-[#1F2937]">
                  <div className="flex pr-2 items-start">
                    <img
                      src="/icon-53.svg"
                      className="flex w-[16.672px] h-6 justify-center items-center"
                    ></img>
                  </div>
                  <div className="flex w-[38.641px] h-5 justify-center items-center shrink-0">
                    <div className="text-white text-center text-sm not-italic font-normal leading-5">
                      송도동
                    </div>
                  </div>
                  <div className="flex pl-2 items-start">
                    <div className="flex w-[16.672px] h-6 justify-center items-center">
                      <img
                        src="/icon-58.svg"
                        className="w-[16.656px] h-4 absolute"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
              {/* 검색창 */}
              <div className="flex w-[536.016px] h-[50px] flex-col items-start shrink-0">
                {/* inline-center-wrap */}
                <div className="flex justify-center items-start self-stretch">
                  {/* input */}
                  <div className="flex w-[536.016px] h-[50px] px-[17px] py-[13px] items-center rounded-lg border border-[#E5E7EB] ">
                    <div className="w-[502.016px] text-gray-400 text-base not-italic font-medium leading-6 left-[17px] top-[13px] ">
                      물건이름을 입력해주세요
                    </div>
                    {/* Button */}
                    <Link
                      href="/main" // 이동할 페이지 (예: /about, /contact 등)
                      className="hover:bg-amber-500 flex w-[32.672px] h-[41px] p-2 justify-center items-start bg-[#F97316] rounded-lg right-2 top-[4.5px] mr-0"
                    >
                      <div className="flex pt-1 items-start">
                        <img
                          src="/icon-62.svg"
                          alt="icon"
                          className="w-[16.672px] h-4"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* margin-wrap */}
          <div className="flex pt-6 items-start">
            {/* DIV-63 */}
            <div className="flex w-[832px] h-5 px-4 justify-center items-start content-start gap-2 flex-wrap">
              <span className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
                인기 검색어:
              </span>
              <button className="flex w-[38.641px] h-5 justify-center items-center shrink-0">
                <div className="text-orange-500 text-center text-sm not-italic font-normal leading-5">
                  에어팟
                </div>
              </button>
              <button className="flex  h-5 justify-center items-center shrink-0">
                <div className="text-orange-500 text-center text-sm not-italic font-normal leading-5">
                  에어팟3
                </div>
              </button>
              <button className="flex  h-5 justify-center items-center shrink-0">
                <div className="text-orange-500 text-center text-sm not-italic font-normal leading-5">
                  노트북
                </div>
              </button>
              <button className="flex  h-5 justify-center items-center shrink-0">
                <div className="text-orange-500 text-center text-sm not-italic font-normal leading-5">
                  원룸
                </div>
              </button>
              <button className="flex  h-5 justify-center items-center shrink-0">
                <div className="text-orange-500 text-center text-sm not-italic font-normal leading-5">
                  현대중고차
                </div>
              </button>
              <button className="flex  h-5 justify-center items-center shrink-0">
                <div className="text-orange-500 text-center text-sm not-italic font-normal leading-5">
                  아침일감
                </div>
              </button>
              <button className="flex  h-5 justify-center items-center shrink-0">
                <div className="text-orange-500 text-center text-sm not-italic font-normal leading-5">
                  급식당
                </div>
              </button>
              <button className="flex  h-5 justify-center items-center shrink-0">
                <div className="text-orange-500 text-center text-sm not-italic font-normal leading-5">
                  배달
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* DIV-91 */}
      <footer className="mx-auto flex w-[1152px] h-[328px] max-w-[1152px] p-8 flex-col items-center shrink-0">
        {/* margin-wrap */}
        <div className="flex pb-12 items-start w-full justify-center">
          {/* DIV-92 */}
          <div className="flex w-[1088px] h-[132px] items-start content-center gap-4 flex-wrap ">
            {/* A-93 */}
            <div className="flex w-[141.703px] h-[132px] p-6 flex-col items-start shrink-0 rounded-2xl bg-white">
              <div className="flex px-[22.844px] pb-3 items-start">
                {/* DIV-94 */}
                <div className="flex w-12 h-12 justify-center items-center rounded-[9999px] bg-[#FFEDD5]">
                  <div className="flex w-[20.844px] h-7 justify-center items-center shrink-0"></div>
                </div>
              </div>
              <div className="text-gray-700 text-center text-sm not-italic font-medium leading-5">
                중고거래
              </div>
            </div>
            {/* A-100 */}
            <div className="flex w-[141.703px] h-[132px] p-6 flex-col items-start shrink-0 rounded-2xl bg-white">
              <div className="flex px-[22.844px] pb-3 items-start">
                {/* DIV-94 */}
                <div className="flex w-12 h-12 justify-center items-center rounded-[9999px] bg-[#FFEDD5]">
                  <div className="flex w-[20.844px] h-7 justify-center items-center shrink-0"></div>
                </div>
              </div>
              <div className="text-gray-700 text-center text-sm not-italic font-medium leading-5">
                알바
              </div>
            </div>
            {/* A-107 */}
            <div className="flex w-[141.703px] h-[132px] p-6 flex-col items-start shrink-0 rounded-2xl bg-white">
              <div className="flex px-[22.844px] pb-3 items-start">
                {/* DIV-94 */}
                <div className="flex w-12 h-12 justify-center items-center rounded-[9999px] bg-[#FFEDD5]">
                  <div className="flex w-[20.844px] h-7 justify-center items-center shrink-0"></div>
                </div>
              </div>
              <div className="text-gray-700 text-center text-sm not-italic font-medium leading-5">
                부동산
              </div>
            </div>
            {/* A-114 */}
            <div className="flex w-[141.703px] h-[132px] p-6 flex-col items-start shrink-0 rounded-2xl bg-white">
              <div className="flex px-[22.844px] pb-3 items-start">
                {/* DIV-94 */}
                <div className="flex w-12 h-12 justify-center items-center rounded-[9999px] bg-[#FFEDD5]">
                  <div className="flex w-[20.844px] h-7 justify-center items-center shrink-0"></div>
                </div>
              </div>
              <div className="text-gray-700 text-center text-sm not-italic font-medium leading-5">
                중고차
              </div>
            </div>
            {/* A-121 */}
            <div className="flex w-[141.703px] h-[132px] p-6 flex-col items-start shrink-0 rounded-2xl bg-white">
              <div className="flex px-[22.844px] pb-3 items-start">
                {/* DIV-94 */}
                <div className="flex w-12 h-12 justify-center items-center rounded-[9999px] bg-[#FFEDD5]">
                  <div className="flex w-[20.844px] h-7 justify-center items-center shrink-0"></div>
                </div>
              </div>
              <div className="text-gray-700 text-center text-sm not-italic font-medium leading-5">
                동네업체
              </div>
            </div>
            {/* A-128 */}
            <div className="flex w-[141.703px] h-[132px] p-6 flex-col items-start shrink-0 rounded-2xl bg-white">
              <div className="flex px-[22.844px] pb-3 items-start">
                {/* DIV-94 */}
                <div className="flex w-12 h-12 justify-center items-center rounded-[9999px] bg-[#FFEDD5]">
                  <div className="flex w-[20.844px] h-7 justify-center items-center shrink-0"></div>
                </div>
              </div>
              <div className="text-gray-700 text-center text-sm not-italic font-medium leading-5">
                동네생활
              </div>
            </div>
            {/* A-135*/}
            <div className="flex w-[141.703px] h-[132px] p-6 flex-col items-start shrink-0 rounded-2xl bg-white">
              <div className="flex px-[22.844px] pb-3 items-start">
                {/* DIV-94 */}
                <div className="flex w-12 h-12 justify-center items-center rounded-[9999px] bg-[#FFEDD5]">
                  <div className="flex w-[20.844px] h-7 justify-center items-center shrink-0"></div>
                </div>
              </div>
              <div className="text-gray-700 text-center text-sm not-italic font-medium leading-5">
                모임
              </div>
            </div>
          </div>
        </div>
        {/* DIV-142 */}
        <div className="flex w-[1088px] h-[84px] items-start content-start gap-3 shrink-0 flex-wrap">
          {/* Button */}
          <div className="flex w-[125.5px] h-9 px-4 py-2 justify-center items-center shrink-0 rounded-[9999px] bg-white">
            <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
              송도동
            </div>
          </div>
          {/* Button */}
          <div className="flex w-[125.5px] h-9 px-4 py-2 justify-center items-center shrink-0 rounded-[9999px] bg-white">
            <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
              역삼동
            </div>
          </div>

          {/* Button */}
          <div className="flex w-[125.5px] h-9 px-4 py-2 justify-center items-center shrink-0 rounded-[9999px] bg-white">
            <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
              홍대동
            </div>
          </div>

          {/* Button */}
          <div className="flex w-[125.5px] h-9 px-4 py-2 justify-center items-center shrink-0 rounded-[9999px] bg-white">
            <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
              협실동
            </div>
          </div>
          {/* Button */}
          <div className="flex w-[125.5px] h-9 px-4 py-2 justify-center items-center shrink-0 rounded-[9999px] bg-white">
            <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
              서교동
            </div>
          </div>
          {/* Button */}
          <div className="flex w-[125.5px] h-9 px-4 py-2 justify-center items-center shrink-0 rounded-[9999px] bg-white">
            <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
              우정동
            </div>
          </div>
          {/* Button */}
          <div className="flex w-[125.5px] h-9 px-4 py-2 justify-center items-center shrink-0 rounded-[9999px] bg-white">
            <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
              송도동
            </div>
          </div>
          {/* Button */}
          <div className="flex w-[125.5px] h-9 px-4 py-2 justify-center items-center shrink-0 rounded-[9999px] bg-white">
            <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
              신림동
            </div>
          </div>
          {/* Button */}
          <div className="flex w-[125.5px] h-9 px-4 py-2 justify-center items-center shrink-0 rounded-[9999px] bg-white">
            <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
              광당동
            </div>
          </div>
          {/* Button */}
          <div className="flex w-[125.5px] h-9 px-4 py-2 justify-center items-center shrink-0 rounded-[9999px] bg-white">
            <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
              합정동
            </div>
          </div>
          {/* Button */}
          <div className="flex w-[125.5px] h-9 px-4 py-2 justify-center items-center shrink-0 rounded-[9999px] bg-white">
            <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
              회동동
            </div>
          </div>
          {/* Button */}
          <div className="flex w-[125.5px] h-9 px-4 py-2 justify-center items-center shrink-0 rounded-[9999px] bg-white">
            <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
              다선동
            </div>
          </div>
          {/* Button */}
          <div className="flex w-[125.5px] h-9 px-4 py-2 justify-center items-center shrink-0 rounded-[9999px] bg-white">
            <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
              미금동
            </div>
          </div>
          {/* Button */}
          <div className="flex w-[125.5px] h-9 px-4 py-2 justify-center items-center shrink-0 rounded-[9999px] bg-white">
            <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
              업구장동
            </div>
          </div>
          {/* Button */}
          <div className="flex w-[125.5px] h-9 px-4 py-2 justify-center items-center shrink-0 rounded-[9999px] bg-white">
            <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
              배곡동
            </div>
          </div>
          {/* Button */}
          <div className="flex w-[125.5px] h-9 px-4 py-2 justify-center items-center shrink-0 rounded-[9999px] bg-white">
            <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
              오정동
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
