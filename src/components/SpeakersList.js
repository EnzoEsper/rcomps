import React, { useEffect } from "react";
import Speaker from "./Speaker";
import { data } from "../../SpeakerData";

const SpeakersList = ({ showSessions }) => {
  const [speakerData, setSpeakerData] = React.useState([]);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const delayFunc = async () => {
      await delay(2000);
      setSpeakerData(data);
    };
    delayFunc();
  }, []);

  function onFavoriteToggle(id) {
    const speakersRecPrevious = speakerData.find((speaker) => speaker.id === id);

    const speakerRecUpdated = {
      ...speakersRecPrevious,
      favorite: !speakersRecPrevious.favorite,
    };

    const speakersDataNew = speakerData.map((speaker) => {
      return speaker.id === id ? speakerRecUpdated : speaker;
    });

    setSpeakerData(speakersDataNew);
  }

  return (
    <div className="container speakers-list">
      <div className="row">
        {speakerData.map(function (speaker) {
          return (
            <Speaker
              speaker={speaker}
              key={speaker.id}
              showSessions={showSessions}
              onFavoriteToggle={() => {
                onFavoriteToggle(speaker.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SpeakersList;
