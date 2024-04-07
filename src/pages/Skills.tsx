import { PrimarySkill } from "../components/sections/PrimarySkill.tsx";
import { Container } from "../components/primitives/Container.tsx";
import { Title } from "../components/primitives/Title.tsx";
import { useTranslation } from "react-i18next";
import { SkillsData } from "../data/skillsData.ts";
import { Box } from "../components/primitives/Box.tsx";
import { Menu, Section } from "../components/nav/Menu.tsx";

export const Skills = () => {
  const [t, _] = useTranslation();
  const languages = SkillsData.getLanguages();
  const frameworks = SkillsData.getFrameworks();
  const concepts = SkillsData.getConcepts();
  const technologies = SkillsData.getTechnologies();
  const sections: Section[] = [
    {
      id: "languages",
      name: `${t("skills.languages")}`,
    },
    {
      id: "frameworks",
      name: `${t("skills.frameworks")}`,
    },
    {
      id: "concepts",
      name: `${t("skills.concepts")}`,
    },
    {
      id: "technologies",
      name: `${t("skills.technologies")}`,
    },
  ];
  return (
    <>
      <Container>
        <Title size={5}>{t("general.primarySkills")}</Title>
        <Box className="mt-12">
          <Menu sections={sections} />
        </Box>

        <div className="mt-5" id={sections[0].id}>
          <Box>
            <Title size={3}>{t("skills.languages")}</Title>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {languages.map((skill, index) => (
                <PrimarySkill key={index} {...skill} />
              ))}
            </div>
          </Box>
        </div>
        <div className="mt-5" id={sections[1].id}>
          <Box>
            <Title size={3}>{t("skills.frameworks")}</Title>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {frameworks.map((framework, index) => (
                <PrimarySkill key={index} {...framework} />
              ))}
            </div>
          </Box>
        </div>
        <div className="mt-5" id={sections[2].id}>
          <Box>
            <Title size={3}>{t("skills.concepts")}</Title>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {concepts.map((concept, index) => (
                <PrimarySkill key={index} {...concept} />
              ))}
            </div>
          </Box>
        </div>
        <div className="mt-5" id={sections[3].id}>
          <Box>
            <Title size={3}>{t("skills.technologies")}</Title>
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
