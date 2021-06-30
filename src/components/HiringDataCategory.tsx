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

  //Two separate useEffect calls, because scrollCheck() must be called with the
  // new y-coordinates after the visibleItems have been rerendered.
  useEffect(() => {
    const filteredItems = categoryData.slice(0, displayCount);
    const visibleElements = filteredItems.map((item) => {
      return <li key={item.id}><div className="category-card">{item.name}</div></li>;
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

  //On Collapse, scrolls back to top of the listId category if it is off the
  // screen. On 'Show 10 more' scrolls to show buttons if they are off screen.
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
      <ul className="category-list-items">{visibleItems}</ul>
      <div className="category-buttons-container">
        <button className="collapse-button" onClick={collapseHandler}>
          Collapse
        </button>
        <button
          className="show-more-button"
          ref={buttonRef}
          onClick={expandHandler}
        >
          Show 10 More
        </button>
      </div>
    </div>
  );
};

export default HiringDataCategory;
