import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Product } from "../types/product";
import ModalChat from "./ModalChat";
import ModalLike from "./ModalLike";
import { ModalProps } from "../types/product";

export default function ProductModal({ open, product, onClose }: ModalProps) {
  // 관심 state
  const [likes, setLikes] = useState<number>(0);

  const handleLikeChange = (newLikes: number) => {
    setLikes(newLikes);
  };
  // 채팅 수 state
  const [chatCount, setChatCount] = useState(0);

  const handleChat = () => {
    setChatCount(chatCount + 1);
  };

  // 조회수 state
  const [views, setViews] = useState<number>(0);
  useEffect(() => {
    if (open) setViews((prev) => prev + 1);
  }, [open]);

  //모달 본체를 가르키는 DOM 참조
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!open) return;

    //ESC -> close
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    //scroll 방지
    const { body } = document;
    const prevOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    //useEffect 클린업
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open || !product) return null;

  return createPortal(
    // 배경 클릭 시 닫힘
    <div
      className="fixed inset-0 z-50 flex justify-center items-start pt-8 bg-black/40"
      onClick={onClose}
    >
      {/* 내부 클릭은 전파 차단 */}
      <div onClick={(e) => e.stopPropagation()} className="relative">
        <div className="self-stretch inline-flex justify-center items-start">
          <div className="px-64 py-8 flex justify-start items-start">
            <div className="w-[896px] h-[605px] max-w-[896px] bg-white rounded-lg shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] inline-flex flex-col justify-start items-start overflow-hidden">
              <div className="w-[896px] h-[605px] bg-white flex flex-col justify-start items-start">
                {/* 상단 바 */}
                <div className="w-[896px] h-16 px-4 py-4 border-b border-gray-200 inline-flex justify-between items-center">
                  <div className="w-18 h-7 flex justify-start items-center">
                    <div className="justify-center text-gray-900 text-lg font-semibold font-['Roboto'] leading-7">
                      상품 상세
                    </div>
                  </div>
                  <div className="w-6 h-8 flex justify-center items-start">
                    <button
                      type="button"
                      onClick={onClose}
                      className="pt-1 flex justify-start items-start"
                    >
                      <img
                        src="Icon-587.svg"
                        className="w-6 h-6 relative overflow-hidden"
                      />
                    </button>
                  </div>
                </div>

                {/* 메인내용 */}
                <div className="w-[896px] h-[540px] p-6 inline-flex justify-start items-start gap-6 flex-wrap content-start">
                  <div className="w-96 h-[492px] inline-flex flex-col justify-start items-start">
                    <div className="pb-4 inline-flex justify-start items-start">
                      <div className="w-96 h-96 inline-flex flex-col justify-start items-start">
                        {/* 대표사진 */}
                        <img
                          className="w-96 h-96 max-w-96 rounded-lg"
                          src="/mainimage.jpg"
                        />
                      </div>
                    </div>
                    <div className="w-96 h-16 inline-flex justify-start items-start overflow-hidden">
                      <div className="w-16 h-16 p-0.5 rounded-lg  outline-2 outline-offset-[-2px] outline-orange-500 inline-flex flex-col justify-start items-start overflow-hidden">
                        <img
                          className="w-14 h-14 max-w-16"
                          src="/IMG-591.png"
                        />
                      </div>
                      <div className="pl-2 flex justify-start items-start">
                        <div className="w-16 h-16 p-0.5 rounded-lg  outline-2 outline-offset-[-2px] outline-gray-200 inline-flex flex-col justify-start items-start overflow-hidden">
                          <img
                            className="w-14 h-14 max-w-16"
                            src="/IMG-596.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-96 h-[492px] inline-flex flex-col justify-start items-start">
                    <div className="pb-6 inline-flex justify-start items-start">
                      <div className="w-96 h-48 inline-flex flex-col justify-start items-start">
                        <div className="pb-2 inline-flex justify-start items-start">
                          <div className="w-96 h-7 flex justify-start items-center">
                            {/* 상품명 */}
                            <div className="justify-center text-gray-900 text-xl font-bold font-['Roboto'] leading-7">
                              {product.name}
                            </div>
                          </div>
                        </div>
                        <div className="pb-4 inline-flex justify-start items-start">
                          <div className="w-96 h-8 flex justify-start items-center">
                            {/* 가격 */}
                            <div className="justify-center text-gray-900 text-2xl font-bold font-['Roboto'] leading-loose">
                              {product.price.toLocaleString()}원
                            </div>
                          </div>
                        </div>
                        <div className="pb-4 inline-flex justify-start items-start">
                          <div className="w-96 h-5 flex justify-start items-center">
                            <div className="w-10 h-5 flex justify-start items-center">
                              {/* 위치*/}
                              <div className="justify-center text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">
                                {product.location}
                              </div>
                            </div>
                            <div className="pl-4 flex justify-start items-start">
                              <div className="w-[4.72px] h-5 flex justify-start items-center">
                                <div className="justify-center text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">
                                  •
                                </div>
                              </div>
                            </div>
                            <div className="pl-4 flex justify-start items-start">
                              <div className="w-11 h-5 flex justify-start items-center">
                                {/* 시간  */}
                                <div className="justify-center text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">
                                  {product.timeago}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pb-6 inline-flex justify-start items-start">
                          <div className="w-96 h-5 flex justify-start items-center">
                            <div className="w-14 h-5 flex justify-start items-center">
                              <div className="w-4 h-4 relative flex justify-center items-center">
                                <img
                                  src="Icon-618.svg"
                                  className="w-3.5 h-3.5 left-[0.71px] top-[1px] absolute overflow-hidden"
                                ></img>
                              </div>
                              <div className="pl-1 flex justify-start items-start">
                                <div className="w-10 h-5 flex justify-start items-center">
                                  <ModalChat chatCount={chatCount} />
                                </div>
                              </div>
                            </div>
                            <div className="pl-6 flex justify-start items-start">
                              <div className="w-14 h-5 flex justify-start items-center">
                                <div className="w-4 h-4 relative flex justify-center items-center">
                                  <img
                                    src="Icon-624.svg"
                                    className="w-3.5 h-3.5 left-[0.71px] top-[1px] absolute overflow-hidden"
                                  ></img>
                                </div>
                                <div className="pl-1 flex justify-start items-start">
                                  <div className="w-10 h-5 flex justify-start items-center">
                                    <div className="justify-center text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">
                                      관심 {likes}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="pl-6 flex justify-start items-start">
                              <div className="w-20 h-5 flex justify-start items-center">
                                <div className="w-4 h-4 relative flex justify-center items-center">
                                  <img
                                    src="Icon-630.svg"
                                    className="w-3.5 h-3.5 left-[0.71px] top-[1px] absolute overflow-hidden"
                                  ></img>
                                </div>
                                <div className="pl-1 flex justify-start items-start">
                                  <div className="w-14 h-5 flex justify-start items-center">
                                    <div className="justify-center text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">
                                      조회 {views}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pb-6 inline-flex justify-start items-start">
                          <div className="w-96 h-6 flex justify-start items-center">
                            <div className="justify-center text-gray-700 text-base font-normal font-['Roboto'] leading-relaxed">
                              거의 완전새제품입니다 기스도없어요 입문용으로
                              좋아용
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pb-6 inline-flex justify-start items-start">
                      <div className="w-96 h-16 pt-6 border-t border-gray-200 inline-flex flex-col justify-start items-start">
                        <div className="pb-4 inline-flex justify-start items-start">
                          <div className="w-96 h-11 flex justify-start items-center">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
                              <img
                                src="Icon-641.svg"
                                className="w-4 h-6 relative flex justify-start items-center"
                              ></img>
                            </div>
                            <div className="pl-3 flex justify-start items-start">
                              <div className="w-20 h-11 inline-flex flex-col justify-start items-start">
                                <div className="w-20 h-6 inline-flex justify-start items-center">
                                  <div className="justify-center text-gray-900 text-base font-medium font-['Roboto'] leading-normal">
                                    kksa
                                  </div>
                                </div>
                                <div className="w-20 h-5 inline-flex justify-start items-center">
                                  <div className="justify-center text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">
                                    왕십리도선동
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="pl-3 flex justify-start items-start">
                              <div className="w-16 h-6 flex justify-start items-center">
                                <div className="w-20 h-4 flex justify-start items-start">
                                  <div className="justify-center text-green-600 text-sm font-medium font-['Roboto'] leading-tight">
                                    39.4°C😃
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-96 h-14 inline-flex justify-start items-start">
                      <div className="w-12 h-14 p-3 rounded-lg outline-1 outline-offset-[-1px] outline-gray-300 flex justify-center items-start">
                        <div className="pt-1 flex justify-start items-start">
                          <div className="w-5 h-5 relative overflow-hidden">
                            <img
                              src="Icon-655.svg"
                              className="w-5 h-5 left-[2.09px] top-[2.30px] absolute"
                            />
                            <ModalLike onLikeChange={handleLikeChange} />
                          </div>
                        </div>
                      </div>
                      <div className="pl-3 flex justify-start items-start">
                        <button
                          type="button"
                          onClick={handleChat}
                          className="w-96 h-14 px-6 py-3 bg-orange-500 rounded-lg flex justify-center items-start"
                        >
                          <div className="text-center justify-center text-white text-base font-medium font-['Roboto'] leading-normal">
                            당근 채팅하기
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
