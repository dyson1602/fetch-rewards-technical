import '../styles/HiringDataCategory.css';
import { useState } from 'react';
import { HiringData } from '../types';
import { useEffect, useRef } from 'react';
import { getWindowDimensions } from '../hooks/getWindowDimensions';

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
  const divRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const filteredItems = categoryData.slice(0, displayCount);
    const visibleElements = filteredItems.map((item) => {
      return <li key={item.id}>{item.name}</li>;
    });
    setVisibleItems(visibleElements);
  }, [displayCount]);

  const collapseHandler = () => {
    const current = divRef.current;
    if (current) {
      current.scrollIntoView({ behavior: 'smooth' });
    }
    setDisplayCount(10);
  };

  const expandHandler = () => {
    if (buttonRef.current) {
      const currentPosition = buttonRef.current.offsetTop;
      
    }
    setDisplayCount(displayCount + 10);
  };

  return (
    <div ref={divRef}>
      <h3>{name}</h3>
      <ul>{visibleItems}</ul>
      <button onClick={collapseHandler}>Collapse</button>
      <button ref={buttonRef} onClick={expandHandler}>
        Show 10 More
      </button>
    </div>
  );
};

export default HiringDataCategory;
