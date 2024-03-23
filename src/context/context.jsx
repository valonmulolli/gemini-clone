import { createContext } from "react";
import runChat from "../config/config";

export const Context = createContext();

const ContextProvider = (props) => {
  
  const onSent = async (prompt) => {
    runChat(prompt);
  }

  onSent("what is Typescript")
  
  const contextValue = {
    
  }

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider