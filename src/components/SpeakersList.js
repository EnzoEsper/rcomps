import React, { useEffect } from "react";
import Speaker from "./Speaker";
import { data } from "../../SpeakerData";
import ReactPlaceHolder from "react-placeholder";

const SpeakersList = ({ showSessions }) => {
  const [speakerData, setSpeakerData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasErrored, setHasErrored] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const delayFunc = async () => {
      try {
        await delay(2000);
        // throw "Had Error.";
        setIsLoading(false);
        setSpeakerData(data);
      } catch (error) {
        setIsLoading(false);
        setHasErrored(true);
        setErrorMessage(error);
      }
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
      </ReactPlaceHolder>
    </div>
  );
};

export default SpeakersList;
