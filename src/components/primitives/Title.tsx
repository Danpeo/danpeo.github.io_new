import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  size?: number;
  className?: string | undefined;
}

export const Title = ({ children, size = 3, className = "text-center"}: TitleProps) => {
  return (
    <>
      <h1 className={`text-${size}xl font-bold text-blue-500 ${className}`}>
        {children}
      </h1>
    </>
  );
};
