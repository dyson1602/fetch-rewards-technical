import '../styles/HiringDataList.css';
import { HiringData } from './Main';
import { useState } from 'react';

interface HiringDataListProps {
  hiringData: HiringData[] | undefined;
}

const categorizeByListId = (hiringData: HiringData[]) => {
  const categorizedHiringData = {}
  hiringData.forEach(item => {
    console.log(item)  
  })

  return categorizedHiringData
};

const HiringDataList: React.FC<HiringDataListProps> = ({ hiringData }) => {
  const [listIdData, setListIdData] = useState<any>();
  if(hiringData){
    categorizeByListId(hiringData)
  }
  return <div>Hiring Data List</div>;
};

export default HiringDataList;
