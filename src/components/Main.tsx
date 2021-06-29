import '../styles/Main.css';
import { useState } from 'react';
import HiringDataList from './HiringDataList';

export interface HiringData {
  id: number;
  listId: number;
  name: string;
}

const filterNamelessData = (hiringData: HiringData[]): HiringData[] => {
  return hiringData.filter((item) => item.name);
};

const Main: React.FC = () => {
  const [hiringData, setHiringData] = useState<HiringData[]>();

  const fetchDataHandler = async () => {
    const response = await fetch(
      'https://fetch-hiring.s3.amazonaws.com/hiring.json'
    );
    const data: HiringData[] = await response.json();
    const filteredHiringData = filterNamelessData(data);
    setHiringData(filteredHiringData);
  };

  console.log(hiringData)
  return (
    <div>
      <h2>Main</h2>
      <button onClick={fetchDataHandler}>Fetch data</button>
      <HiringDataList hiringData={hiringData}/>
    </div>
  );
};

export default Main;
