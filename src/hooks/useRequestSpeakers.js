import { data } from "../../SpeakerData";
import React, { useEffect } from "react";

const useRequestSpeakers = (delayTime = 1000) => {
  const [speakersData, setSpeakersData] = React.useState([]);
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
        setSpeakersData(data);
      } catch (error) {
        setIsLoading(false);
        setHasErrored(true);
        setErrorMessage(error);
      }
    };
    delayFunc();
  }, []);

  function onFavoriteToggle(id) {
    const speakersRecPrevious = speakersData.find((speaker) => speaker.id === id);

    const speakerRecUpdated = {
      ...speakersRecPrevious,
      favorite: !speakersRecPrevious.favorite,
    };

    const speakersDataNew = speakersData.map((speaker) => {
      return speaker.id === id ? speakerRecUpdated : speaker;
    });

    setSpeakersData(speakersDataNew);
  }

  return {
    speakersData,
    isLoading,
    hasErrored,
    errorMessage,
    onFavoriteToggle,
  };
};

export default useRequestSpeakers;
