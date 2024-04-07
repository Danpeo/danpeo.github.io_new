import { SimpleCard } from "../primitives/SimpleCard.tsx";

export interface EducationProps {
  institution: string;
  yearOfGraduation: number;
  educationLevel: string;
  specialization: string;
  className?: string | undefined;
}

export const Education = ({
  institution,
  yearOfGraduation,
  educationLevel,
  specialization,
  className = "",
}: EducationProps) => {
  return (
    <>
      <div className={className}>
        <SimpleCard>
          <h2 className="text-3xl font-bold leading-normal text-white">
            {institution}
          </h2>
          <div className="flex flex-col space-y-2">
            <div className={"font-semibold text-white"}>
              <p>{educationLevel}</p>
              <p>{specialization}</p>
              <p>{yearOfGraduation}</p>
            </div>
          </div>
        </SimpleCard>
      </div>
    </>
  );
};
