import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  size?: number;
}

export const Title = ({ children, size = 3}: TitleProps) => {
  return (
    <>
      <h1 className={`text-${size}xl font-bold text-blue-500 text-center`}>
        {children}
      </h1>
    </>
  );
};
