import { createContext, useState } from "react";

export const QuestionContext = createContext({
  question: [],
  setQuestion: () => {}
})

export const QuestionProvider = ({ children }) => {
  const [question, setQuestion] = useState([]);
  const value = { question, setQuestion };
  return <QuestionContext.Provider value={value}>{children}</QuestionContext.Provider>;
} 