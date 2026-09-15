import { ReactNode } from "react";

import { ContainerStyle } from "./container.style";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children, ...props }: ContainerProps) => {
  return <ContainerStyle {...props}>{children}</ContainerStyle>;
};
