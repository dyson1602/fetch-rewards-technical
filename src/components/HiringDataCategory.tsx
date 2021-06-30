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

  useEffect(() => {
    scrollCheck();
  }, [visibleItems]);

  const collapseHandler = () => {
    setDisplayCount(10);
  };

  const expandHandler = () => {
    setDisplayCount(displayCount + 10);
  };

  const scrollCheck = () => {
    if (displayCount === 10 && divRef.current) {
      const divHeight = divRef.current.offsetTop;
      const { screenTop } = getWindowDimensions();
      if (divHeight < screenTop) {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (displayCount > 10 && buttonRef.current) {
      const buttonHeight = buttonRef.current.offsetTop;
      const { height, screenTop } = getWindowDimensions();
      if (buttonHeight > screenTop + height) {
        buttonRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }
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
