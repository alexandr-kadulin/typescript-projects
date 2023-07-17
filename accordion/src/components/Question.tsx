import { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { HiMinusCircle } from "react-icons/hi";

interface IQuestion {
  title: string;
  info: string;
}

export const Question = ({ title, info }: IQuestion) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <HiMinusCircle className="question-icon" />
          ) : (
            <BsPlusCircleFill className="question-icon" />
          )}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};
