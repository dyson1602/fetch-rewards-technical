import '../styles/HiringDataList.css';
import { HiringData } from './Main';

interface HiringDataListProps {
  hiringData: HiringData[] | undefined;
}

const HiringDataList: React.FC<HiringDataListProps> = ({ hiringData }) => {
  console.log('hiring data',hiringData)
  return <div>Hiring Data List</div>;
};

export default HiringDataList;
