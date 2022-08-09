import React, { useContext } from "react";

import LanguageContext from "./language-context";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <>
      <button onClick={() => setLanguage("1")}>
        Switch Language (Current: {language})
      </button>
      <button onClick={() => setLanguage("2")}>
        Switch Language (Current: {language})
      </button>
    </>
  );
};

export default LanguageSwitcher;
