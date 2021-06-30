import { HiringData } from '../types';
import { useState, useEffect } from 'react';
import HiringDataCategory from './HiringDataCategory';

export interface categorizedHiringData {
  [listId: number]: HiringData[];
}

export interface HiringDataListProps {
  hiringData: HiringData[] | undefined;
}

//Takes in an array of objects and sorts them into bins based on the listId.
// Dynamic, so that more listId's can be added in the future without affecting
// funciontality.
const categorizeByListId = (hiringData: HiringData[]) => {
  const categorizedHiringData: categorizedHiringData = {};
  hiringData.forEach((item) => {
    const { listId } = item;
    if (categorizedHiringData[listId]) {
      categorizedHiringData[listId].push(item);
    } else {
      categorizedHiringData[listId] = [item];
    }
  });
  return categorizedHiringData;
};

//Takes in and array of objects that has been filtered to only include instances
// that have a name value, and returns an array that has been sorted by name
// value. The substring method removes excess 'Item- ' from the string so it can
// be parsed.
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
      //Alphabetize all data first, because it will be in order as it is pushed
      // into its listId bin by categorizeByListId
      const alphabetizedData = alphabetizeHiringData(hiringData);
      const categorizedHiringData = categorizeByListId(alphabetizedData);
      setListIdData(categorizedHiringData);
    }
  }, [hiringData]);

  //Check if listIdData is truthy (contains objects) so that .values() doesn't
  // throw an error looking for values of 'undefined'. Returns an array of
  // HiringDataCategory components sorted in order of listId.
  const hiringDataListDisplay =
    listIdData &&
    Object.values<HiringData[]>(listIdData).map((listIdCategory) => {
      const listId = listIdCategory[0].listId;
      return (
        <HiringDataCategory
          key={`listId-${listId}`}
          categoryData={listIdCategory}
          name={`List Id - ${listId}`}
        />
      );
    });

  return <div style={{ height: '100%' }}>{hiringDataListDisplay}</div>;
};

export default HiringDataList;
