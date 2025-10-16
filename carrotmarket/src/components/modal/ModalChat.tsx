import React from "react";
import { ModalChatProps } from "../types/product";

export default function ModalChat({ chatCount }: ModalChatProps) {
  return (
    <div className="justify-center text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">
      채팅 {chatCount}
    </div>
  );
}
