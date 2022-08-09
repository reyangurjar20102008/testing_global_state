import LanguageContext from "./language-context";
import React, { useContext } from "react";

const child_component = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <>
      {language}
      <button onClick={() => setLanguage("3")}>
        Switch Language 3 (Current: {language})
      </button>
    </>
  );
};

export default child_component;
