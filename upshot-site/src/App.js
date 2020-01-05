import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='row'>
        <div id="logo">

        </div>
       <div className="column" id="pageHeader">
         THIS IS A HEADLINE.
       </div>
      </div>
      <div className='row 2'>
        <div className='column'>
          <div className='menu'>
            <ul className="menuOptions">

            </ul>
      </div>
        </div>
        <div className='double-column'>
          <div className='inner-column'>
            Some Text in Column Two
      </div>
        </div>
      </div>
    </div>
  );
}

export default App;
