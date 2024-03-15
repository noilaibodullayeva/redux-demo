import { Provider } from 'react-redux'
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/icecreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <IcecreamContainer/>
      </div>
    </Provider>

  );
}

export default App;
