import '../styles/HiringDataCategory.css';
import { HiringData } from '../types';

export interface HiringDataCategoryProps {
  key: string;
  categoryData: HiringData[];
}

const HiringDataCategory: React.FC<HiringDataCategoryProps> = ({
  categoryData,
}) => {
  console.log(categoryData);

  const categoryItems = categoryData.map((item) => {
    return <li>{item.name}</li>;
  });

  return (
    <div>
      <h3>Hiring Category</h3>
      <ul>{categoryItems}</ul>
    </div>
  );
};

export default HiringDataCategory;
