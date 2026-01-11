import styled from "@emotion/styled";

//sidebar
export const Sb = styled.div`
  box-sizing: border-box;
  padding: 0 0.75rem;
  float: left;
  text-align: left;
  color: #ffffff;
  background-color: #5da4d9;
  overflow: hidden;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  margin-left: 0;
  width: 100%;
  @media only screen and (min-width: 993px) {
    width: 33.33333%;
  }
`;
export const SbI = styled.div`
  overflow: hidden;
  margin: 10px -0.75rem 20px -0.75rem;
`;
export const SbIc = styled.div`
  width: 25%;
  margin-left: 0;
  margin-top: 8px;
  float: left;
  box-sizing: border-box;
  padding: 0 0.75rem;
  text-align: center;
`;
export const SbIn = styled.div`
  width: 75%;
  margin-left: 0;
  border-bottom: 1px solid #4783c2;
  padding-left: 0px;
  float: left;
  .important:last-child &:last-child {
    border-bottom: none;
  }
`;
export const SbDet = styled.div`
  padding-right: 26px;
  margin-bottom: 30px;
`;
export const Prog = styled.div`
  background-color: #4783c2;
  height: 2px;
  position: relative;
  width: 100%;
  border-radius: 2px;
  margin: 0.5rem 0 1rem 0;
`;
export const Det = styled.div`
  background-color: #ffffff;
  position: absolute;
  top: 0;
  bottom: 0;
`;
export const DdSp = styled.span`
  cursor: pointer;
  opacity: 0.8;
  line-height: 1.5;
`;
export const Wrap = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  margin: 0.5rem 0 1rem 0;
`;
export const WText = styled.p`
  font-size: 12px;
  margin: 5%;
`;
export const InProg = styled.div`
  width: 90%;
  margin: 0 5%;
  font-size: 12px;
`;
export const SbTi = styled.h3`
  margin-top: 0px;
  margin-bottom: 20px;
  font-size: 14pt;
  line-height: 24pt;
  font-weight: 500;
`;
export const UrIc = styled.div`
  width: 25%;
  margin-left: -25%;
  float: left;
  box-sizing: border-box;
  padding: 0 0.75rem;
`;
export const UrIn = styled.div`
  width: 75%;
  margin-left: 0;
  padding-left: 0px;
`;

//section
export const Sc = styled.div`
  box-sizing: border-box;
  padding: 0 0.75rem;
  float: left;
  padding-left: 32px !important;
  text-align: left;
  color: #767270;
  margin-left: 0;
  width: 100%;
  @media only screen and (min-width: 993px) {
    width: 66.66667%;
  }
`;
export const ScI = styled.div`
  border-bottom: 1px solid #bdbdbd;
  padding-right: 30px;
  margin-bottom: 25px;
  &:last-child {
    border-bottom: none;
  }
`;
export const ScTi = styled.h3`
  margin: 0px;
  font-size: 12pt;
  line-height: 20pt;
  font-weight: 600;
`;
export const ScTiSp = styled.span`
  color: #767270;
  opacity: 1;
  font-weight: 500;
`;
export const ScSp = styled.span`
  color: #5da4d9;
  margin-top: 0px;
  font-size: 10pt;
  line-height: 15pt;
`;
export const ScWr = styled.div`
  background-color: #ffffff;
  overflow: hidden;
  margin: 0px -0.75rem 24px;
  padding-bottom: 24px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
`;
export const ScIc = styled.div`
  width: 16.66667%;
  margin-top: 40px;
  margin-left: 0;
  float: left;
  padding: 0 0.75rem;
  text-align: center;
  box-sizing: border-box;
`;
export const ScCo = styled.div`
  width: 83.33333%;
  margin-left: 0;
  float: left;
  padding-right: 0px;
`;
export const ScWrTi = styled.h2`
  margin-top: 30px;
  margin-bottom: 25px;
  font-size: 22pt;
  line-height: 37pt;
  font-weight: 520;
`;
