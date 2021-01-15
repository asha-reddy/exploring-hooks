import React, { useState } from "react";

function Board() {
  const [likes, setLikes] = useState(0);
  return (
    <div>
      HELLO, Likes: {likes}
      <button onClick={() => setLikes((likes) => likes + 1)}>Like</button>
    </div>
  );
}

export default Board;
