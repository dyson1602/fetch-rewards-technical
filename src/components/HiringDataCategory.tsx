import '../styles/HiringDataCategory.css';
import { HiringData } from './Main';

interface HiringDataCategoryProps {
  categoryData: HiringData[];
}

const HiringDataCategory: React.FC<HiringDataCategoryProps> = (
  categoryData
) => {
  console.log(categoryData);
  return <div>Data category</div>;
};

export default HiringDataCategory;
