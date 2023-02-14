import { createContext, useState } from "react";

export const ScoreContext = createContext({
  score: [],
  setScore: () => {}
})

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState([]);
  const value = { score, setScore };
  return <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>;
}