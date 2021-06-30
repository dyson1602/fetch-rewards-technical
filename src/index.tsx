import './styles/index.css'
import ReactDOM from 'react-dom';
import MainContainer from './components/MainContainer';

const App = () => {
  return (
    <div className="index">
      <div>
        <h1>Fetch Rewards Technical Assessment</h1>
        <MainContainer />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
