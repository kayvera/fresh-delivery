import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  /* height: 70px; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;
  font-family: "Righteous", cursive;
  background-color: #f44336;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
