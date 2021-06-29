import ReactDOM from 'react-dom';
import MainContainer from './components/MainContainer';

const App = () => {
  return (
    <div>
      <h1>Fetch Rewards Technical Assessment</h1>
      <MainContainer />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
