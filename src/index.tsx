import ReactDOM from 'react-dom';
import MainContainer from './components/MainContainer';

const App = () => {
  return (
    <div >
        <MainContainer />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
