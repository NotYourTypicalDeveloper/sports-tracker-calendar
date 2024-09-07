import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};
export default function Container(props: ContainerProps) {
  const { children } = props;
  return <div className="flex-auto px-8">{children}</div>;
}
