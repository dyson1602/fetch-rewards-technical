import '../styles/HiringDataList.css';
import { HiringData } from './Main';
import { useState, useEffect } from 'react';
import HiringDataCategory from './HiringDataCategory';

interface HiringDataListProps {
  hiringData: HiringData[] | undefined;
}

interface categorizedHiringData {
  [listId: number]: HiringData[];
}

const categorizeByListId = (hiringData: HiringData[]) => {
  const categorizedHiringData: categorizedHiringData = {};
  hiringData.forEach((item) => {
    const { listId } = item;
    if (categorizedHiringData[listId]) {
      categorizedHiringData[listId] = [...categorizedHiringData[listId], item];
    } else {
      categorizedHiringData[listId] = [item];
    }
  });
  return categorizedHiringData;
};

const alphabetizeHiringData = (hiringData: HiringData[]) => {
  const alphabetizedHiringData = hiringData.sort((a, b): number => {
    const aName = parseInt(a.name.substring(5, a.name.length));
    const bName = parseInt(b.name.substring(5, b.name.length));
    if (aName > bName) return 1;
    if (aName < bName) return -1;
    return 0;
  });
  return alphabetizedHiringData;
};

const HiringDataList: React.FC<HiringDataListProps> = ({ hiringData }) => {
  const [listIdData, setListIdData] = useState<any>();

  useEffect(() => {
    if (hiringData) {
      const alphabetizedData = alphabetizeHiringData(hiringData);
      const categorizedHiringData = categorizeByListId(alphabetizedData);
      setListIdData(categorizedHiringData);
    }
  }, [hiringData]);

  const hiringDataListDisplay =
    listIdData &&
    Object.values<HiringData[]>(listIdData).map((listIdCategory) => {
      return (
        <HiringDataCategory
          key={`listId-${listIdCategory[0].listId}`}
          categoryData={listIdCategory}
        />
      );
    });
    
    console.log(hiringDataListDisplay)
  return (
    <div>
      <h3>Hiring Data List</h3>
      {hiringDataListDisplay}
    </div>
  );
};

export default HiringDataList;
