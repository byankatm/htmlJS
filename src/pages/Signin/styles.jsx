import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 722px;
  height: 612px;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  padding: 20px;
  border-radius: 15px;
`;

export const Label = styled.label`
  font-size: 25px;
  font-weight: 450;
  margin-top: 0
  color: #676767;
`;

export const email = styled.label`
  margin: 30px;
  & .iconImageEmail{
    position: absolute;
    right: 43%;
    margin-top: 29px;
  }
`;

export const password = styled.div`
  margin-bottom: 30px;
  .iconImagePass{
    position: absolute;
    right: 43%;
    margin-top: 29px;
  }
`;

export const labelOne = styled.label`
    font-size: 17px;
    font-family: Anybody;
`;

export const ContentW = styled.div`
  margin-top: 10px;
  font-family: Anybody;
`;

export const Input = styled.input`
  display: flex;
  width: 312px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: #fff;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;

export const Button = styled.button`
  margin-top: 35px;
  font-family: Anybody;
  font-size: 20px;
  width: 252px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #193A83;
  color: #fff
`;

export const img = styled.img`

  width: 174px;
  height: 173px;
  flex-shrink: 0;

`;