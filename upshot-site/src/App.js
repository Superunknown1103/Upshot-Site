import React from 'react';
import './App.css';
import SideMenu from './Components/SideMenu.js';
import Header from './Components/Header.js';
import ItemCardContainer from './Components/ItemCardContainer.js'
import items from './items.js';

function App() {
  return (
    <div className="App">
      <div className='row headingRow'>
        <Header />
      </div>
      <div className='row 2'>
        <div className='column'>
         <SideMenu />
        </div>
        <div className='double-column'>
         <ItemCardContainer itemList={items} />
        </div>
      </div>
    </div>
  );
}

export default App;
