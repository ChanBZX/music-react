import { NavLink } from "react-router-dom";

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';
import { headerLinks } from "@/common/local-data";
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function Header() {
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="icon topbar"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link}>
          {item.title}
          <i className="icon topbar"></i>
        </a>
      )
    }
  }

  return (
    <HeaderWrapper >
      <div className="content">
        <div className="header-func">
          <HeaderLeft>
            <a href="#/" className="logo topbar"></a>
            <div className="select-list">
              {headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {showSelectItem(item, index)}
                  </div>
                )
              })}
            </div>
          </HeaderLeft>
          <HeaderRight>
            <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined/>} ></Input>
            <Button shape="round" ghost className="center">创作者中心</Button >
            <Button ghost className="login">登录</Button>
          </HeaderRight>
        </div>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
}

export default Header;
