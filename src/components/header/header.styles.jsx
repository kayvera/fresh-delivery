import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  /* height: 70px; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;
  font-family: "Righteous", cursive;
  background-color: white;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 300px;
  padding-top: 25px;
  padding-left: 10px;
  padding-bottom: 25px;
  text-decoration: none;
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
  color: black;
  text-decoration: none;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 24px;
  font-weight: bold;
`;
