import React from 'react';
import TopMenu from './TopMenu';
import CombinedMenu from './CombinedMenu';

function Header(){
  let logo = require(`../images/logo-placeholder.png`);
    return (
        <React.Fragment>
        <div id="logo">
        <img src={logo} />
        </div>
        <div className="topMenu">
         <TopMenu />
        </div>
       <div className="column" id="pageHeader">
         THIS IS A HEADLINE.
       </div>
       <CombinedMenu />
       </React.Fragment>
    )
}

export default Header;