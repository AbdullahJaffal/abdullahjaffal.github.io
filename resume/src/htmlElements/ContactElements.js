import styled from "@emotion/styled";

//form
export const FmFi = styled.div`
  position: relative;
  margin-top: 1rem;
  float: left;
  padding: 0 0.75rem;
  width: 100%;
`;
export const FmLa = styled.label`
  color: #9e9e9e;
  position: absolute;
  top: 0.8rem;
  font-size: 1rem;
  cursor: text;
`;
export const FmIn = styled.input`
  border: none;
  border-bottom: 1px solid #9e9e9e;
  outline: none;
  height: 3rem;
  width: 100%;
  font-size: 1rem;
  margin: 0 0 15px 0;
  padding: 0;
  &:focus {
    border-bottom: 2px solid #5da4d9;
  }
`;

export const FmTx = styled.textarea`
  border: none;
  border-bottom: 1px solid #9e9e9e;
  outline: none;
  height: 3rem;
  width: 100%;
  font-size: 1rem;
  margin: 0 0 15px 0;
  padding: 1.6rem 0;
  resize: none;
  min-height: 3rem;
  &:focus {
    border-bottom: 2px solid #5da4d9;
  }
`;
export const FmBtn = styled.button`
  background-color: #5da4d9;
  color: #fff;
  cursor: default;
  margin-left: 10px;
  text-align: center;
  letter-spacing: 0.5px;
  border: none;
  border-radius: 2px;
  height: 36px;
  padding: 0 2rem;
`;
