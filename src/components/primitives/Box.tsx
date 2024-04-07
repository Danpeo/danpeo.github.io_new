import { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  className?: string | undefined;
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <>
      <div className={`p-10 border rounded-lg shadow bg-gray-950 border-gray-800 ${className}`}>
        {children}
      </div>
    </>
  );
};
