'use client'

import { pageState } from "@/atom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const PracticePage: React.FC = () => {
  const [page, setPage] = useRecoilState(pageState);

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === " ") {
      setPage("practiceImage");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return <h1 className="text-3xl">이번 사진은 연습입니다.</h1>;
};

export default PracticePage;
