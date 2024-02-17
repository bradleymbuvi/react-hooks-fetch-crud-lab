import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, delQuiz }) {

  const list= questions.map((quiz)=>
      <QuestionItem key={quiz.id} question ={quiz} delQuiz={delQuiz}/>
      )


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
      <ul>
        {list}
      </ul>
    </section>
  );
}

export default QuestionList;
