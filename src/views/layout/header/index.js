import { NavLink } from "react-router-dom";
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';
import { headerLinks } from "@/common/local-data";

function Header() {
  const showSelectItem = (item, index) =>{
    if(index < 3){
      return (
        <NavLink to={item.link}>{item.title}</NavLink>
      )
    } else{
      return  <a href={item.link}>{item.title}</a>
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
            {/* <NavLink to="/">发现音乐</NavLink>
            <NavLink to="/mine">我的音乐</NavLink>
            <NavLink to="/friend">朋友</NavLink> */}
          </HeaderLeft>
          <HeaderRight>
            搜索
          </HeaderRight>
        </div>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
}

export default Header;
