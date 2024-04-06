import { PrimarySkill } from "../components/sections/PrimarySkill.tsx";
import { Container } from "../components/primitives/Container.tsx";
import { Title } from "../components/primitives/Title.tsx";
import { useTranslation } from "react-i18next";
import { SkillsData } from "../data/skillsData.ts";
import { Box } from "../components/primitives/Box.tsx";

export const Skills = () => {
  const [t, _] = useTranslation();
  const languages = SkillsData.getLanguages();
  const frameworks = SkillsData.getFrameworks();
  const concepts = SkillsData.getConcepts();
  const technologies = SkillsData.getTechnologies();
  return (
    <>
      <Container>
        <Title size={5}>{t("general.primarySkills")}</Title>
        <div className="mt-12">
          <Box>
            <Title size={3}>Languages</Title>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {languages.map((skill, index) => (
                  <PrimarySkill key={index} {...skill} />
              ))}
            </div>
          </Box>
        </div>
        <div className="mt-5">
          <Box>
            <Title size={3}>Frameworks/Libraries</Title>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {frameworks.map((framework, index) => (
                  <PrimarySkill key={index} {...framework} />
              ))}
            </div>
          </Box>
        </div>
        <div className="mt-5">
          <Box>
            <Title size={3}>Concepts</Title>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {concepts.map((concept, index) => (
                  <PrimarySkill key={index} {...concept} />
              ))}
            </div>
          </Box>
        </div>
        <div className="mt-5">
          <Box>
            <Title size={3}>Technologies</Title>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                  <PrimarySkill key={index} {...tech} />
              ))}
            </div>
          </Box>
        </div>
      </Container>
    </>
  );
};
