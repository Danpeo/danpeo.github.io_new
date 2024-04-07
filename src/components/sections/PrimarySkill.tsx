import { useEffect, useState } from "react";
import { SimpleCard } from "../primitives/SimpleCard.tsx";

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
      <SimpleCard>
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-white">
          {name}
        </h5>

        <div className="h-6 rounded-full bg-gray-700">
          <div
            className="h-6 rounded-full bg-blue-500"
            style={{ width: `${width}%`, transition: "width 0.8s" }}
          ></div>
        </div>
      </SimpleCard>
    </>
  );
};
