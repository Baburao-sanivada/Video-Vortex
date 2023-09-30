import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import { AppStore } from './utils/AppStore';

function App() {
  return (
    <Provider store={AppStore}>
      <div className="App">
        <Head/>
        <Body/>
      </div>
    </Provider>
  );
}

export default App;
