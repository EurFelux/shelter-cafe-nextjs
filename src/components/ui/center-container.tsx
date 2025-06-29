import { ReactNode } from "react";

type CenterContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function CenterContainer({ children, className }: CenterContainerProps) {
  return (
    <div className={"flex justify-center items-center grow " + className}>{children}</div>
  );
}
