import React from "react";
import "./Emoji.css";

const Emoji = React.memo(function Emoji({ emoji, votes, onVote }) {
  return (
    <div onClick={onVote} className="emoji-descr">
      <span>{emoji}</span>
      <span>{votes}</span>
    </div>
  );
});

export default Emoji;
