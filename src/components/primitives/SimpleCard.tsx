import { ReactNode } from "react";

interface SimpleCardProps {
  children: ReactNode;
}

export const SimpleCard = ({ children }: SimpleCardProps) => {
  return (
    <>
      <div className="p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
        {children}
      </div>
    </>
  );
};
