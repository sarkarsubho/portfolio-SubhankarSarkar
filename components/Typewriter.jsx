"use client";
import React, { useState, useEffect } from "react";

const Typewriter = ({ texts }) => {
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [letter, setLetter] = useState("");

  useEffect(() => {
    if (count === texts.length) {
      setCount(0);
    }

    setCurrentText(texts[count]);
    setIndex(0);
  }, [count, texts]);

  useEffect(() => {
    if (index < currentText.length) {
      const timeout = setTimeout(() => {
        setLetter(currentText.slice(0, index + 1));
        setIndex(index + 1);
      }, 200); // Adjust the typing speed here (in milliseconds)

      return () => clearTimeout(timeout);
    }
  }, [index, currentText]);

  return (
    <div className="typewriter flex justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">{letter}</h1>
    </div>
  );
};

export default Typewriter;
