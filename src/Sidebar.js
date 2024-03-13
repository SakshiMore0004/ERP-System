// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="/"><KeyboardArrowRightIcon/><p className='sidebar-heading'>Dashboard</p></NavLink>
          </li>
          <li>
          
            <NavLink to="/products"><KeyboardArrowRightIcon/><p className='sidebar-heading'>Products</p></NavLink>
          </li>
          <li>
          {/* <KeyboardArrowRightIcon/> */}
            <NavLink to="/orders"><KeyboardArrowRightIcon/><p className='sidebar-heading'>Orders</p></NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
