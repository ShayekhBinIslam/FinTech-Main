import React from 'react';
import "./sidebar.css"

import {AccountBalanceWallet, Inventory, AccountBalance, MonetizationOn, Flag, Article} from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">
                  Income
              </h3>
              <ul className="sidebarList">
                  <li className="sidebarListItem active">
                    <AccountBalanceWallet className='sidebarIcon'/>
                    Income
                  </li>
                  <li className="sidebarListItem">
                    <Inventory className='sidebarIcon'/>
                    Expense
                  </li>
                  <li className="sidebarListItem">
                    <MonetizationOn className='sidebarIcon'/>
                    Cash Flow
                  </li>
                  <li className="sidebarListItem">
                    <AccountBalance className='sidebarIcon'/>
                    Bank Accounts
                  </li>
                  <li className="sidebarListItem">
                    <Flag className='sidebarIcon'/>
                    Goal Achievement
                  </li>
                  <li className="sidebarListItem">
                    <Article className='sidebarIcon'/>
                    Retirement Planning
                  </li>
              </ul>
          </div>
      </div>
    </div>
  );
}
