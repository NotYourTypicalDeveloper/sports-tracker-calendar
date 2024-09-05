import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};
export default function Container(props: ContainerProps) {
  const { children } = props;
  return <main className="flex-auto">{children}</main>;
}
