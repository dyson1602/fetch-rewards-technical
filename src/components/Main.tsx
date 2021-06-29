import '../styles/Main.css';
import { useState } from 'react';
import HiringDataList from './HiringDataList';

interface HiringData {
  id: number;
  listId: number;
  name: string;
}

const Main: React.FC = () => {
  const [hiringData, setHiringData] = useState<HiringData[]>();

  const fetchDataHandler = async () => {
    const response = await fetch(
      'https://fetch-hiring.s3.amazonaws.com/hiring.json'
    );
    const data: HiringData[] = await response.json();
    setHiringData(data);
  };

  return (
    <div>
      <h2>Main</h2>
      <button onClick={fetchDataHandler}>Fetch data</button>
      <HiringDataList />
    </div>
  );
};

export default Main;
