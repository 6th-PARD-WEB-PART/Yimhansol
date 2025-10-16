import { useState, useEffect } from "react";
import { ModalLikeProps } from "../types/product";


export default function ModalLike({ onLikeChange }: ModalLikeProps) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [animating, setAnimating] = useState(false);

  function handleLike() {
    if (liked === false) {
      setLiked(true);
      setLikes(likes + 1);
    } else {
      setLiked(false);
      setLikes(likes - 1);
    }

    setAnimating(true);
    setTimeout(() => setAnimating(false), 300);
  }

  // ✅ 부모에게 변경사항 전달
  useEffect(() => {
    if (onLikeChange) onLikeChange(likes);
  }, [likes, onLikeChange]);

  return (
    <button
      type="button"
      onClick={handleLike}
      className="w-5 h-5 left-[2.09px] top-[2.30px] absolute"
    >
      <img
        src={liked ? "/Group.svg" : "/Icon-655.svg"}
        alt="like"
        width={20}
        height={20}
        className={`transition-transform duration-200 ${
          animating ? "scale-125" : "scale-100"
        }`}
      />
    </button>
  );
}
