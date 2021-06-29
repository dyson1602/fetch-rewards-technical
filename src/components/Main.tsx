import '../styles/Main.css';
import { useState } from 'react';

interface HiringData {
  id: number;
  listId: number;
  name: string;
}

export const Main: React.FC = () => {
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
    </div>
  );
};
