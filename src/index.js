import React, { useState } from "react";
import ReactDOM from "react-dom";
import ChildComponent from "./ChildComponent";
import LanguageContext from "./language-context";
import LanguageSwitcher from "./LanguageSwitcher";

const App = () => {
  const [language, setLanguage] = useState("en");
  const value = { language, setLanguage };

  return (
    <LanguageContext.Provider value={value}>
      <h2>Current Language: {language}</h2>
      <p>Click button to change to jp</p>
      <div>
        {/* Can be nested */}
        <LanguageSwitcher />
        <ChildComponent />
      </div>
    </LanguageContext.Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
