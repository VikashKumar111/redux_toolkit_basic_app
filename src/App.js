import { Fragment } from 'react';

import Counter  from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';


function App() {
  return (
    <Fragment>
      <Auth/>
      <Header/>
      <Counter/> 
    </Fragment>
      
  );
}

export default App;
