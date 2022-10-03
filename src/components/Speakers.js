import React from "react";
import { data } from "../../SpeakerData";
import SpeakersToolbar from "./SpeakersToolbar";
import Header from "./Header";
import SpeakersList from "./SpeakersList";

const Speakers = () => {
  const [theme, setTheme] = React.useState("light");

  return (
    <div className={theme === "light" ? "container-fluid light" : "container-fluid dark"}>
      <Header theme={theme} />
      <SpeakersToolbar theme={theme} setTheme={setTheme} />
      <SpeakersList data={data} />
    </div>
  );
};

export default Speakers;
