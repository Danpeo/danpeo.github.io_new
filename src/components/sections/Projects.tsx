import { useTranslation } from "react-i18next";
import { Card } from "../primitives/Card.tsx";
import { ProjectsData } from "../../data/projectsData.ts";
import { Container } from "../primitives/Container.tsx";

export const Projects = () => {
  const [t, _] = useTranslation();
  const projectCards = ProjectsData.getProjectCards();
  return (
    <>
      <Container>
        <div className="p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-950 dark:border-gray-800">
          <h2 className="text-3xl font-bold text-blue-500 text-center">
            {t("home.myProjects")}
          </h2>
          <div className="grid grid-cols-4 gap-4 mt-10">
            {projectCards.map((card, index: number) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};
