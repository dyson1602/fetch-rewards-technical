import ReactDOM from 'react-dom';
import { Main } from './components/Main';

const App = () => {
  return (
    <div>
      <h1>Fetch Rewards Technical Assessment</h1>
      <Main />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
