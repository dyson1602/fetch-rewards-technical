import '../styles/HiringDataCategory.css';
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
  const categoryItems = categoryData.map((item) => {
    return <li key={item.id}>{item.name}</li>;
  });

  return (
    <div>
      <h3>{name}</h3>
      <ul>{categoryItems}</ul>
    </div>
  );
};

export default HiringDataCategory;
