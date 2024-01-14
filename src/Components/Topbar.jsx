import React from 'react';
import './topbar/topbar.css';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarContainer">
            <div className="topbarNav">
                <ul className="topbarList">
                    <li className="topbarListItem">Home</li>
                    <li className="topbarListItem">Contact</li>
                    <li className="topbarListItem">Product</li>
                    <li className="topbarListItem">Company</li>
                </ul>
            </div>
            <div className="topbarIcon">
                <img 
                    src="https://www.shutterstock.com/image-photo/asian-businesswoman-portrait-isolated-on-260nw-2079816676.jpg" 
                    alt="profileIcons" 
                    className="topbarImg" 
                />
            </div>
        </div>      
    </div>
  )
}