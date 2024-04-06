import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <>
      <div className="container mx-auto mt-10 mb-10">{children}</div>
    </>
  );
};
