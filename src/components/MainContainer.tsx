import '../styles/Main.css';
import { useState } from 'react';
import HiringDataList from './HiringDataList';
import { HiringData } from '../types';

//Takes in raw json data from the API and filters out any objects that have a
// falsey value for the name property. This includes null and empty strings.
const filterNamelessData = (hiringData: HiringData[]): HiringData[] => {
  return hiringData.filter((item) => item.name);
};

//Main component that holds the raw hiring data and fetches it from the API
const MainContainer: React.FC = () => {
  const [hiringData, setHiringData] = useState<HiringData[]>();

  const fetchDataHandler = async () => {
    const response = await fetch(
      'https://fetch-hiring.s3.amazonaws.com/hiring.json'
    );
    const data: HiringData[] = await response.json();
    const filteredHiringData = filterNamelessData(data);
    setHiringData(filteredHiringData);
  };

  return (
    <div className="main">
      <div >
        <h1>Fetch Rewards Technical Assessment</h1>
        <button onClick={fetchDataHandler}>Fetch data</button>
        <HiringDataList hiringData={hiringData} />
      </div>
    </div>
  );
};

export default MainContainer;
