import logo from "@/assets/logo.svg";
import { Image } from "@chakra-ui/react";

export function Logo() {
  return (
    <Image src={logo} alt="logo" display="inline-block" height="100%"></Image>
  );
}
