import React, { useState, useCallback, useEffect } from "react";
import Emoji from "../Emoji/Emoji";
import Results from "../Results/Results";
import "./EmojiList.css";

function EmojiList() {
  const [emojis, setEmojis] = useState(function () {
    const savedEmojis = localStorage.getItem("emojis");
    return savedEmojis
      ? JSON.parse(savedEmojis)
      : [
          { id: 1, emoji: "😎", votes: 11 },
          { id: 2, emoji: "😂", votes: 5 },
          { id: 3, emoji: "😊", votes: 7 },
          { id: 4, emoji: "😍", votes: 3 },
          { id: 5, emoji: "😆", votes: 6 },
        ];
  });

  useEffect(function () {
    localStorage.setItem("emojis", JSON.stringify(emojis));
  }, [emojis]);

  const handleVote = useCallback(function(id) {
    setEmojis(function(prevEmojis) {
      return prevEmojis.map(function(emoji) {
        return emoji.id === id ? { ...emoji, votes: emoji.votes + 1 } : emoji;
      });
    });
  }, []);

  return (
    <div className="container">
      <div className="emoji-wrapper">
        {emojis.map(function ({ id, emoji, votes }) {
          return (
            <Emoji
              key={id}
              emoji={emoji}
              votes={votes}
              onVote={function () {
                handleVote(id);
              }}
            />
          );
        })}
      </div>
      <div className="results-wrapper">
        <Results emojis={emojis} setEmojis={setEmojis} />
      </div>
    </div>
  );
}

export default EmojiList;
