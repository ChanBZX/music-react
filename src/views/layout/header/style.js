import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  .content{
    height: 70px;
    display: flex;
    justify-content: center;
    .header-func{
      height: 70px;
      width: 1000px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
    }
  }
  .divider{
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
display: flex;
  .logo{
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
  }
  .select-list{
    display: flex;
    line-height: 70px;
    .select-item{
      position: relative;
      a{
        display: block;
        padding: 0 20px;
        color: #ccc; 
      }
      :last-of-type a {
        position:relative;
        ::after{
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/topbar.png")});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a, &.active a{
        color: #fff;
        background: #000;
        text-decoration-line: none;
      }

      &.active .icon{
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translateX(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`;
export const HeaderRight = styled.div``;