import { ContainerStyle } from "./container.style";

export const Container = ({ children, ...props }) => {
  return <ContainerStyle {...props}>{children}</ContainerStyle>;
};
