import { data } from "../../SpeakerData";
import React, { useEffect } from "react";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

const useRequestSpeakers = (delayTime = 1000) => {
  const [speakersData, setSpeakersData] = React.useState([]);
  const [requestStatus, setRequestStatus] = React.useState(REQUEST_STATUS.LOADING);
  const [errorMessage, setErrorMessage] = React.useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const delayFunc = async () => {
      try {
        await delay(delayTime);
        // throw "Had Error.";
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setSpeakersData(data);
      } catch (error) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
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
    requestStatus,
    errorMessage,
    onFavoriteToggle,
  };
};

export default useRequestSpeakers;
