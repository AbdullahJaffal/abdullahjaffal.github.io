import styled from "@emotion/styled";

export const Nb = styled.nav`
  color: #fff;
  position: fixed;
  width: 240px;
  top: 0;
  margin: 0;
  height: 100%;
  background: white;
  z-index: 999;
  left: -250px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 25%);
  @media only screen and (min-width: 993px) {
    left: 0px !important;
  }
`;
export const NbUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
export const NbLi = styled.li`
  float: none;
  padding: 0 15px;
  &:first-child {
    padding: 0px !important;
  }
`;
export const Pro = styled.div`
  position: relative;
  margin-bottom: 8px;
  height: 225px;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;
export const RvImg = styled.img`
  max-width: 100%;
  height: auto;
`;
export const Tl = styled.div`
  position: absolute;
  left: 55px;
  top: 140px;
  right: 11px;
  bottom: 46px;
  color: #fff;
  line-height: 64px;
`;
export const TlNm = styled.h2`
  margin: 0px;
  font-weight: 500;
  font-size: 19pt;
  line-height: 3pt;
`;
export const TlSp = styled.span`
  font-size: 9pt;
  margin: 0px;
  padding: 0px;
  line-height: 15pt;
  opacity: 1;
`;
