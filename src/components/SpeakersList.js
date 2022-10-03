import React from "react";
import Speaker from "./Speaker";

const SpeakersList = ({ data }) => {
  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map(function (speaker) {
          return <Speaker speaker={speaker} key={speaker.id} />;
        })}
      </div>
    </div>
  );
};

export default SpeakersList;
