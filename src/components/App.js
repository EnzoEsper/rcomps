import React from "react";

import Header from "./Header";
import Speakers from "./Speakers";

const App = () => {
  const [theme, setTheme] = React.useState("light");

  return (
    <div className={theme === "light" ? "container-fluid light" : "container-fluid dark"}>
      <Header theme={theme} />
      <Speakers theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
