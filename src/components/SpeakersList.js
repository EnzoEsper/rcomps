import React, { useEffect } from "react";
import Speaker from "./Speaker";
import ReactPlaceHolder from "react-placeholder";
import useRequestSpeakers from "../hooks/useRequestSpeakers";

const SpeakersList = ({ showSessions }) => {
  const { speakersData, isLoading, hasErrored, errorMessage, onFavoriteToggle } = useRequestSpeakers(2000);

  if (hasErrored === true) {
    return (
      <div className="text-danger">
        Error: <b>loading Speaker Data Failed {errorMessage}</b>
      </div>
    );
  }

  // if (isLoading === true) return <div>Loading...</div>;

  return (
    <div className="container speakers-list">
      <ReactPlaceHolder type="media" rows={15} className="speakerslist-placeholder" ready={isLoading === false}>
        <div className="row">
          {speakersData.map(function (speaker) {
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
      </ReactPlaceHolder>
    </div>
  );
};

export default SpeakersList;
