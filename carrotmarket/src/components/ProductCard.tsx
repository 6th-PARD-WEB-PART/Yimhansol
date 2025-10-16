//상품 카드 컴포넌트
import React from "react";
import type { Product } from "./types/product";
import LikeButton from "./LikeButton";
import { ProductCardProps } from "./types/product";


export default function ProductCard({ product, onDetail }: ProductCardProps) {
  return (
    // product card
    <div className="flex w-[190px] h-[331px] flex-col items-start gap-2 rounded-lg bg-white">
      {/* Rectangle */}
      <div className="h-[171px] flex-shrink-0 self-stretch rounded-t-lg bg-orange-100"></div>

      {/* Frame */}
      <div className="flex px-[10px] flex-col justify-center items-start self-stretch">
        <div className="flex w-[165px] h-12 flex-col justify-center overflow-hidden text-[#111827] font-roboto text-base not-italic font-medium leading-6 whitespace-normal break-words">
          {product.name}
        </div>

        <div className="text-[#111827] font-roboto text-xl not-italic font-bold leading-7">
          {product.price}원
        </div>
        <div className="text-[#6B7280] font-roboto text-sm not-italic font-normal leading-5">
          {product.location} • {product.timeago}
        </div>
      </div>

      {/* Frame */}
      <div className="flex p-[10px] justify-end items-center gap-[10px] self-stretch">
        <LikeButton />
        <button
          type="button"
          onClick={() => onDetail?.(product)}
          className="flex w-[57.125px] h-7 px-3 py-1.5 items-center rounded-lg bg-[#F97316]"
        >
          <div className="text-white font-roboto text-xs not-italic font-medium leading-4">
            자세히
          </div>
        </button>
      </div>
    </div>
  );
}
