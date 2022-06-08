import { DiscoverWrapper, TopMenu } from './style';
import { discoverMenu } from '@/common/local-data';

import { NavLink, Outlet } from "react-router-dom";

function Discover() {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className='wrap-v1'>
          {discoverMenu.map((item, index) => {
            return (
              <div className='item' key={index}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })
          }
        </TopMenu>
      </div>
      <Outlet />
    </DiscoverWrapper>
  );
}

export default Discover;