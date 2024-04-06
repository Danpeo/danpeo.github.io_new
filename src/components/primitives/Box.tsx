import { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
}

export const Box = ({ children }: BoxProps) => {
  return (
    <>
      <div className="p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-950 dark:border-gray-800">
        {children}
      </div>
    </>
  );
};
