import React from "react";
import Speaker from "./Speaker";
import { data } from "../../SpeakerData";

const SpeakersList = ({ showSessions }) => {
  const [speakerData, setSpeakerData] = React.useState(data);

  return (
    <div className="container speakers-list">
      <div className="row">
        {speakerData.map(function (speaker) {
          return <Speaker speaker={speaker} key={speaker.id} showSessions={showSessions} />;
        })}
      </div>
    </div>
  );
};

export default SpeakersList;
