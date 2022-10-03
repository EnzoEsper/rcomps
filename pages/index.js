import { data } from "../SpeakerData";
import Speaker from "../src/components/Speaker";

const IndexPage = () => {
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

export default IndexPage;
