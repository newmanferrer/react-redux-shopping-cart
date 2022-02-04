import { Provider } from 'react-redux';
import { ShoppingCart } from './components';
import store from './state/store';

const App: React.FC<{}> = (): JSX.Element => {
 return (
  <Provider store={store}>
   <ShoppingCart />
  </Provider>
 );
};

export default App;
