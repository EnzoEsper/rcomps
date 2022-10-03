import React from "react";
import { data } from "../../SpeakerData";
import SpeakersToolbar from "./SpeakersToolbar";
import Header from "./Header";
import SpeakersList from "./SpeakersList";

const Speakers = () => {
  return (
    <div className="container-fluid">
      <Header />
      <SpeakersToolbar />
      <SpeakersList data={data} />
    </div>
  );
};

export default Speakers;
