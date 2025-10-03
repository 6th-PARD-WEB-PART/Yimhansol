import Image from "next/image";
import Link from "next/link";
export default function Main() {
  return (
    // DESKTOP
    <div className="flex w-[1440px] flex-col justify-center items-start bg-[#F9FAFB]">
      {/* HEADER-4 */}
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
      {/* Frame2 */}
      <div className="flex w-[1440px] p-[10px] flex-col justify-center items-center gap-[10px] border border-[#E5E7EB] bg-white">
        {/* Frame 5 */}
        <div className="flex flex-col items-start gap-[10px]">
          {/* Frame 4 */}
          <div className="flex justify-center items-center gap-[10px]">
            {/* INPUT */}
            <div className="flex w-[1000px] h-[55px] p-[10px] justify-center items-center gap-[10px] rounded-lg border border-[#E5E7EB] bg-white">
              {/* Frame3 */}
              <div className="flex justify-between items-center flex-[1_0_0]">
                {/* input */}
                <div className="w-[502.016px] text-gray-400 text-base not-italic font-medium leading-6">
                  물건이름을 입력해주세요
                </div>
                {/* BUTTON-61 */}
                <Link
                  href="/"
                  className="flex w-[32.672px] h-[41px] p-2 justify-center items-start rounded-lg bg-orange-500"
                >
                  <div className="flex pt-1 items-start">
                    <img src="/icon-62.svg" className="w-[16.672px] h-4"></img>
                  </div>
                </Link>
              </div>
            </div>
            {/* margin-wrap */}
            <div className="flex pl-4 items-start">
              {/* DIV-51 */}
              <div className="flex w-[93.516px] h-6 items-center">
                {/* I-52 */}
                <div className="flex w-[16.672px] h-6 items-center shrink-0">
                  <img src="/icon-47.svg" className="w-[16.656px] h-4 "></img>
                </div>
                {/* margin-wrap */}
                <div className="flex pl-2 items-start">
                  <div className="flex w-[44.172px] h-6 items-center">
                    <div className="text-gray-700 text-base not-italic font-normal leading-6">
                      송도동
                    </div>
                  </div>
                </div>
                {/* margin-wrap */}
                <div className="flex pl-2 items-start">
                  {/* I-57 */}
                  <div className="flex w-[16.672px] h-6 items-center">
                    <img
                      src="/icon-40.svg"
                      className=" w-[16.656px] h-4 top-1"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DIV-59 */}
          <div className="flex h-8 items-start content-start gap-2 flex-wrap">
            {/* BUTTON */}
            <div className="flex w-[71.266px] h-8 px-3 py-[6px] justify-center items-center rounded-full bg-gray-100">
              <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
                #에어팟
              </div>
            </div>
            {/* BUTTON */}
            <div className="flex w-[71.266px] h-8 px-3 py-[6px] justify-center items-center rounded-full bg-gray-100">
              <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
                #아이폰
              </div>
            </div>
            {/* BUTTON */}
            <div className="flex w-[71.266px] h-8 px-3 py-[6px] justify-center items-center rounded-full bg-gray-100">
              <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
                #삼성
              </div>
            </div>
            {/* BUTTON */}
            <div className="flex w-[71.266px] h-8 px-3 py-[6px] justify-center items-center rounded-full bg-gray-100">
              <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
                #냉장고
              </div>
            </div>
            {/* BUTTON */}
            <div className="flex w-[71.266px] h-8 px-3 py-[6px] justify-center items-center rounded-full bg-gray-100">
              <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
                #자전거
              </div>
            </div>
            {/* BUTTON */}
            <div className="flex w-[71.266px] h-8 px-3 py-[6px] justify-center items-center rounded-full bg-gray-100">
              <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
                #노트북
              </div>
            </div>
            {/* BUTTON */}
            <div className="flex w-[71.266px] h-8 px-3 py-[6px] justify-center items-center rounded-full bg-gray-100">
              <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
                #의자
              </div>
            </div>
            {/* BUTTON */}
            <div className="flex w-[71.266px] h-8 px-3 py-[6px] justify-center items-center rounded-full bg-gray-100">
              <div className="text-gray-700 text-center text-sm not-italic font-normal leading-5">
                #책상
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frame6 */}
      <main className="flex h-[788px] py-[25px] px-[100px] justify-center items-start gap-[25px]">
        {/* Frame 8 */}
        <div className="flex w-[260px] p-4 flex-col items-start gap-[10px] rounded-lg bg-white">
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
        <div className="flex w-[795px] h-[739px] flex-col items-start gap-[15px]">
          {/* DIV-151 */}
          <div className="flex h-7 flex-col items-start shrink-0">
            {/* H1-152 */}
            <div className="flex h-7 items-center shrink-0">
              <div className="text-[#111827] font-roboto text-xl not-italic font-bold leading-7">
                전체 상품
              </div>
            </div>
          </div>

          {/* Frame 10 */}
          <div className="flex h-[696px] justify-center items-start content-start gap-[10px] shrink-0 self-stretch flex-wrap">
            {/* Product1 */}
            <div className="flex w-[190px] h-[331px] flex-col items-start gap-2 rounded-lg bg-white">
              {/* Rectangle */}
              <div className="h-[171px] flex-shrink-0 self-stretch rounded-t-lg bg-orange-100"></div>

              {/* Frame */}
              <div className="flex px-[10px] flex-col justify-center items-start self-stretch">
                <div className="flex w-[165px] h-12 flex-col justify-center overflow-hidden text-[#111827] font-roboto text-base not-italic font-medium leading-6 whitespace-normal break-words">
                  아이폰 14 프로 128GB 퍼플 깨끗한 상태
                </div>

                <div className="text-[#111827] font-roboto text-xl not-italic font-bold leading-7">
                  850,000원
                </div>
                <div className="text-[#6B7280] font-roboto text-sm not-italic font-normal leading-5">
                  송도동 • 몇초 전
                </div>
              </div>

              {/* Frame */}
              <div className="flex p-[10px] justify-end items-center gap-[10px] self-stretch">
                <img src="icon-187.svg" className="w-[18.766px] h-4.5"></img>
                <div className="flex w-[57.125px] h-7 px-3 py-1.5 items-center rounded-lg bg-[#F97316]">
                  <div className="text-white font-roboto text-xs not-italic font-medium leading-4">
                    자세히
                  </div>
                </div>
              </div>
            </div>

            {/* Product2 */}
            <div className="flex w-[190px] h-[331px] flex-col items-start gap-2 rounded-lg bg-white">
              {/* Rectangle */}
              <div className="h-[171px] flex-shrink-0 self-stretch rounded-t-lg bg-orange-100"></div>

              {/* Frame */}
              <div className="flex px-[10px] flex-col justify-center items-start self-stretch">
                <div className="flex w-[165px] h-12 flex-col justify-center overflow-hidden text-[#111827] font-roboto text-base not-italic font-medium leading-6 whitespace-normal break-words">
                  아이폰 14 프로 128GB 퍼플 깨끗한 상태
                </div>

                <div className="text-[#111827] font-roboto text-xl not-italic font-bold leading-7">
                  850,000원
                </div>
                <div className="text-[#6B7280] font-roboto text-sm not-italic font-normal leading-5">
                  송도동 • 몇초 전
                </div>
              </div>

              {/* Frame */}
              <div className="flex p-[10px] justify-end items-center gap-[10px] self-stretch">
                <img src="icon-187.svg" className="w-[18.766px] h-4.5"></img>
                <div className="flex w-[57.125px] h-7 px-3 py-1.5 items-center rounded-lg bg-[#F97316]">
                  <div className="text-white font-roboto text-xs not-italic font-medium leading-4">
                    자세히
                  </div>
                </div>
              </div>
            </div>

            {/* Product3 */}
            <div className="flex w-[190px] h-[331px] flex-col items-start gap-2 rounded-lg bg-white">
              {/* Rectangle */}
              <div className="h-[171px] flex-shrink-0 self-stretch rounded-t-lg bg-orange-100"></div>

              {/* Frame */}
              <div className="flex px-[10px] flex-col justify-center items-start self-stretch">
                <div className="flex w-[165px] h-12 flex-col justify-center overflow-hidden text-[#111827] font-roboto text-base not-italic font-medium leading-6 whitespace-normal break-words">
                  아이폰 14 프로 128GB 퍼플 깨끗한 상태
                </div>

                <div className="text-[#111827] font-roboto text-xl not-italic font-bold leading-7">
                  850,000원
                </div>
                <div className="text-[#6B7280] font-roboto text-sm not-italic font-normal leading-5">
                  송도동 • 몇초 전
                </div>
              </div>

              {/* Frame */}
              <div className="flex p-[10px] justify-end items-center gap-[10px] self-stretch">
                <img src="icon-187.svg" className="w-[18.766px] h-4.5"></img>
                <div className="flex w-[57.125px] h-7 px-3 py-1.5 items-center rounded-lg bg-[#F97316]">
                  <div className="text-white font-roboto text-xs not-italic font-medium leading-4">
                    자세히
                  </div>
                </div>
              </div>
            </div>

            {/* Product4 */}
            <div className="flex w-[190px] h-[331px] flex-col items-start gap-2 rounded-lg bg-white">
              {/* Rectangle */}
              <div className="h-[171px] flex-shrink-0 self-stretch rounded-t-lg bg-orange-100"></div>

              {/* Frame */}
              <div className="flex px-[10px] flex-col justify-center items-start self-stretch">
                <div className="flex w-[165px] h-12 flex-col justify-center overflow-hidden text-[#111827] font-roboto text-base not-italic font-medium leading-6 whitespace-normal break-words">
                  아이폰 14 프로 128GB 퍼플 깨끗한 상태
                </div>

                <div className="text-[#111827] font-roboto text-xl not-italic font-bold leading-7">
                  850,000원
                </div>
                <div className="text-[#6B7280] font-roboto text-sm not-italic font-normal leading-5">
                  송도동 • 몇초 전
                </div>
              </div>

              {/* Frame */}
              <div className="flex p-[10px] justify-end items-center gap-[10px] self-stretch">
                <img src="icon-187.svg" className="w-[18.766px] h-4.5"></img>
                <div className="flex w-[57.125px] h-7 px-3 py-1.5 items-center rounded-lg bg-[#F97316]">
                  <div className="text-white font-roboto text-xs not-italic font-medium leading-4">
                    자세히
                  </div>
                </div>
              </div>
            </div>

            {/* Product5 */}
            <div className="flex w-[190px] h-[331px] flex-col items-start gap-2 rounded-lg bg-white">
              {/* Rectangle */}
              <div className="h-[171px] flex-shrink-0 self-stretch rounded-t-lg bg-orange-100"></div>

              {/* Frame */}
              <div className="flex px-[10px] flex-col justify-center items-start self-stretch">
                <div className="flex w-[165px] h-12 flex-col justify-center overflow-hidden text-[#111827] font-roboto text-base not-italic font-medium leading-6 whitespace-normal break-words">
                  아이폰 14 프로 128GB 퍼플 깨끗한 상태
                </div>

                <div className="text-[#111827] font-roboto text-xl not-italic font-bold leading-7">
                  850,000원
                </div>
                <div className="text-[#6B7280] font-roboto text-sm not-italic font-normal leading-5">
                  송도동 • 몇초 전
                </div>
              </div>

              {/* Frame */}
              <div className="flex p-[10px] justify-end items-center gap-[10px] self-stretch">
                <img src="icon-187.svg" className="w-[18.766px] h-4.5"></img>
                <div className="flex w-[57.125px] h-7 px-3 py-1.5 items-center rounded-lg bg-[#F97316]">
                  <div className="text-white font-roboto text-xs not-italic font-medium leading-4">
                    자세히
                  </div>
                </div>
              </div>
            </div>

            {/* Product6 */}
            <div className="flex w-[190px] h-[331px] flex-col items-start gap-2 rounded-lg bg-white">
              {/* Rectangle */}
              <div className="h-[171px] flex-shrink-0 self-stretch rounded-t-lg bg-orange-100"></div>

              {/* Frame */}
              <div className="flex px-[10px] flex-col justify-center items-start self-stretch">
                <div className="flex w-[165px] h-12 flex-col justify-center overflow-hidden text-[#111827] font-roboto text-base not-italic font-medium leading-6 whitespace-normal break-words">
                  아이폰 14 프로 128GB 퍼플 깨끗한 상태
                </div>

                <div className="text-[#111827] font-roboto text-xl not-italic font-bold leading-7">
                  850,000원
                </div>
                <div className="text-[#6B7280] font-roboto text-sm not-italic font-normal leading-5">
                  송도동 • 몇초 전
                </div>
              </div>

              {/* Frame */}
              <div className="flex p-[10px] justify-end items-center gap-[10px] self-stretch">
                <img src="icon-187.svg" className="w-[18.766px] h-4.5"></img>
                <div className="flex w-[57.125px] h-7 px-3 py-1.5 items-center rounded-lg bg-[#F97316]">
                  <div className="text-white font-roboto text-xs not-italic font-medium leading-4">
                    자세히
                  </div>
                </div>
              </div>
            </div>

            {/* Product7 */}
            <div className="flex w-[190px] h-[331px] flex-col items-start gap-2 rounded-lg bg-white">
              {/* Rectangle */}
              <div className="h-[171px] flex-shrink-0 self-stretch rounded-t-lg bg-orange-100"></div>

              {/* Frame */}
              <div className="flex px-[10px] flex-col justify-center items-start self-stretch">
                <div className="flex w-[165px] h-12 flex-col justify-center overflow-hidden text-[#111827] font-roboto text-base not-italic font-medium leading-6 whitespace-normal break-words">
                  아이폰 14 프로 128GB 퍼플 깨끗한 상태
                </div>

                <div className="text-[#111827] font-roboto text-xl not-italic font-bold leading-7">
                  850,000원
                </div>
                <div className="text-[#6B7280] font-roboto text-sm not-italic font-normal leading-5">
                  송도동 • 몇초 전
                </div>
              </div>

              {/* Frame */}
              <div className="flex p-[10px] justify-end items-center gap-[10px] self-stretch">
                <img src="icon-187.svg" className="w-[18.766px] h-4.5"></img>
                <div className="flex w-[57.125px] h-7 px-3 py-1.5 items-center rounded-lg bg-[#F97316]">
                  <div className="text-white font-roboto text-xs not-italic font-medium leading-4">
                    자세히
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
