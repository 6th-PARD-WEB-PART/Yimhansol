import React from "react";

type Props = {
  chatCount: number;
};

export default function ModalChat({ chatCount }: Props) {
  return (
    <div className="justify-center text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">
      채팅 {chatCount}
    </div>
  );
}
