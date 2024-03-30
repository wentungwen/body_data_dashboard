import { useContext } from "react";
import { userDataContext } from "../contexts/userDataContext";
import BodyComposition from "../sections/BodyComposition";
import BodyGraph from "../sections/BodyGraph";
import GeneralInfo from "../sections/GeneralInfo";
import Obesity from "../sections/Obesity";
import PersonalInfo from "../sections/PersonalInfo";
import Segmental from "../sections/Segmental";


export default function MainPage() {
  const {data, mappedData, updateData} = useContext(userDataContext)

  const greeting = () => {
    const name = data.personalInfo.name;
    const date = new Date().toLocaleDateString();
    return (
      <div>
        <h1>Hi, {name}</h1>
        <p>
          The information below shows the results of your body measurement
          testing on {date}
        </p>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-6">{greeting()}</div>
      </div>
      <div className="row">
        <div className="col col-2 personal-col">
          <PersonalInfo data={mappedData} />
        </div>
        <div className="col col-6 general-col">
          <GeneralInfo data={mappedData} />
        </div>
        <div className="col col-4 body-graph-col">
          <BodyGraph data={mappedData} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col col-6 body-comp-col">
          <BodyComposition data={mappedData} />
        </div>
        <div className="col col-6 obesity-col">
          <Obesity data={mappedData} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <Segmental data={mappedData} />
        </div>
      </div>
    </div>
  );
}
