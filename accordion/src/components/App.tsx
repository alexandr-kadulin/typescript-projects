import { useState } from "react";
import { questionsData } from "../data";
import { Question } from ".";

export const App = () => {
  const [questions] = useState(questionsData);

  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question}></Question>;
          })}
        </section>
      </div>
    </main>
  );
};
