import React from 'react';

export default function CombinedMenu() {
    return (
        <div>
            <div id='combinedMenu'>
                <nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <li>Home</li>
                            <li>About</li>
                            <li>Products</li>
                            <li>Help</li>
                            <br />
                            <li style={{textDecoration: 'underline'}}>Jump to: </li>
                            <li>
                                Footwear
                            </li>
                            <li>
                                Water Fountains
                            </li>
                            <li>
                                Garage Door Openers
                            </li>
                            <li>
                                Smart Home Tech
                            </li>
                            <li>
                                Beverages
                            </li>
                            <li>
                                Education
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
};