import '../styles/HiringDataCategory.css';
import { useState } from 'react';
import { HiringData } from '../types';
import { useEffect, useRef } from 'react';

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
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const filteredItems = categoryData.slice(0, displayCount);
    const visibleElements = filteredItems.map((item) => {
      return <li key={item.id}>{item.name}</li>;
    });
    setVisibleItems(visibleElements);
  }, [displayCount]);

  const isOnScreen = () => {
    if(){
      const currentPosition = .current.offsetTop()
    }
  }
  
  const scrollToTop = () => {
    const current = divRef.current;
    if (current) {
      current.scrollIntoView({ behavior: 'smooth'});
    }
    setDisplayCount(10)
  };

  return (
    <div ref={divRef}>
      <h3>{name}</h3>
      <ul>{visibleItems}</ul>
      <button onClick={scrollToTop}>Collapse</button>
      <button ref={buttonRef} onClick={() => setDisplayCount(displayCount + 10)}>
        Show 10 More
      </button>
    </div>
  );
};

export default HiringDataCategory;
