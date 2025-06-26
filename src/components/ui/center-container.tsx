import { ReactNode } from "react";

type CenterContainerProps = {
  children: ReactNode;
};

export default function CenterContainer({ children }: CenterContainerProps) {
  return (
    <div className="flex justify-center items-center grow">{children}</div>
  );
}
