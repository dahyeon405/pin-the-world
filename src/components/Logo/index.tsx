import logo from "@/assets/logo.svg";
import styled from "styled-components";

export default function Logo() {
  return <LogoImage src={logo} alt="logo"></LogoImage>;
}

const LogoImage = styled.img`
  display: inline-block;
  height: 100%;
`;
