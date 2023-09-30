import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import { AppStore } from './utils/AppStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';


const appRoute=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    }
]
}])
function App() {
  return (
    <Provider store={AppStore}>
      <div className="App">
        <Head/>
        <RouterProvider router={appRoute}/>
      </div>
    </Provider>
  );
}

export default App;
