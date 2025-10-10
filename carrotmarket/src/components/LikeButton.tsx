import { useState } from "react";

export default function LikeButton() {
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
    // 애니메이션
    setAnimating(true);
    setTimeout(() => setAnimating(false), 300);
  }

  return (
    <button
      type="button"
      onClick={handleLike}
      className="inline-flex items-center gap-2"
    >
      <img
        src={liked ? "/Group.svg" : "/icon-187.svg"}
        alt="like"
        width={20}
        height={20}
        className={`transition-transform duration-200 ${
          animating ? "scale-125" : "scale-100"
        }`}
      />

      <div className="justify-center text-gray-500 text-xs font-normal font-['Roboto'] leading-tight">
        {likes}
      </div>
    </button>
  );
}
