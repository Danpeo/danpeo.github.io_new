import { useEffect, useState } from "react";

export interface PrimarySkillProps {
  name: string;
  valuePercent: number;
}

export const PrimarySkill = ({ name, valuePercent }: PrimarySkillProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(valuePercent);
  }, [valuePercent]);
  return (
    <>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>

        <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className="h-6 bg-blue-600 rounded-full dark:bg-blue-500"
            style={{ width: `${width}%`, transition: "width 0.8s" }}
          ></div>
        </div>
      </div>
    </>
  );
};
