import React, { useState } from "react";

function saveToLocalStorage(likes: string) {
  try {
    const serializedLikes = JSON.stringify(likes);
    localStorage.setItem("likes", serializedLikes);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedLikes = localStorage.getItem("likes");
    if (serializedLikes == null) return undefined;
    return JSON.parse(serializedLikes);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

function onLike(
  likes: number,
  setLikes: React.Dispatch<React.SetStateAction<number>>
) {
  setLikes((likes: number) => likes + 1);
  saveToLocalStorage(JSON.stringify(likes));
}

function Board() {
  const [likes, setLikes] = useState(0);
  return (
    <div>
      HELLO, Page Likes: {loadFromLocalStorage()}
      <button onClick={() => onLike(likes, setLikes)}>Like</button>
    </div>
  );
}

export default Board;
