import React from 'react';
import '../css/SideBar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
    <nav className="nav">
      <ul>
        <div className='logo'><img src='https://static.vecteezy.com/system/resources/thumbnails/015/070/957/small/blue-sunglasses-icon-cartoon-style-vector.jpg'/></div>
        <li className="active"><a>Home</a></li>
        <li className="active"><a>Dashboard</a></li>
        <li className="active"><a>Profile</a></li>
        <li className="active"><a>Logout</a></li>
      </ul>
    </nav>
  </aside>
  );
}

export default Sidebar;
