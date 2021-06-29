import '../styles/HiringDataCategory.css';
import { useState } from 'react';
import { HiringData } from '../types';

export interface HiringDataCategoryProps {
  name: string;
  categoryData: HiringData[];
}

//Component that returns a list of all the hiring data in an array
const HiringDataCategory: React.FC<HiringDataCategoryProps> = ({
  categoryData,
  name,
}) => {
  const [expanded, setExpanded] = useState(false);

  const categoryItems = categoryData.map((item) => {
    return <li key={item.id}>{item.name}</li>;
  });

  return (
    <div>
      <h3>{name}</h3>
      <ul>{categoryItems}</ul>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Collapse' : 'Expand'}
      </button>
    </div>
  );
};

export default HiringDataCategory;
