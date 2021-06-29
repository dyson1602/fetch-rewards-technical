import '../styles/HiringDataCategory.css';
import { useState } from 'react';
import { HiringData } from '../types';
import { useEffect } from 'react';

export interface HiringDataCategoryProps {
  name: string;
  categoryData: HiringData[];
}

//Component that returns a list of all the hiring data in an array
const HiringDataCategory: React.FC<HiringDataCategoryProps> = ({
  categoryData,
  name,
}) => {
  const [displayCount, setDisplayCount] = useState<number>(10);
  const [visibleItems, setVisibleItems] = useState<JSX.Element[]>();

  useEffect(() => {
    const filteredItems = categoryData.slice(0, displayCount);
    const visibleElements = filteredItems.map((item) => {
      return <li key={item.id}>{item.name}</li>;
    });
    setVisibleItems(visibleElements);
  }, [displayCount]);

  return (
    <div>
      <h3>{name}</h3>
      <ul>{visibleItems}</ul>
      <button onClick={() => setDisplayCount(10)}>Collapse</button>
      <button onClick={() => setDisplayCount(displayCount + 10)}>
        Show 10 More
      </button>
    </div>
  );
};

export default HiringDataCategory;
