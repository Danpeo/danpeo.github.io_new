import { Title } from "../components/primitives/Title.tsx";
import { useTranslation } from "react-i18next";
import { Container } from "../components/primitives/Container.tsx";
import { Box } from "../components/primitives/Box.tsx";
import { Education } from "../components/sections/Education.tsx";
import { EducationData } from "../data/educationData.ts";

export const About = () => {
  const calcAge = (birthDate: string): number => {
    const today = new Date();
    const bd = new Date(birthDate);
    let age = today.getFullYear() - bd.getFullYear();
    const monthDiff = today.getMonth() - bd.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < bd.getDate())) {
      age--;
    }
    return age;

  };
  const age = calcAge("2001-02-07");
  const educations = EducationData.getEducationInfo();
  const [t, _] = useTranslation();
  return (
    <>
      <Container>
        <Title className="text-6xl">{t("general.myName")}</Title>
        <p className="text-3xl font-semibold leading-normal text-white">
          {age} {t("about.yearsOld")}, {t("about.russia")},{" "}
          {t("about.votkinsk")},
        </p>
        <Box className="mt-5">
          <Title className="text-4xl text-center">
            {t("about.aboutMeSection")}
          </Title>
          <p className="text-3xl font-semibold leading-normal text-white">
            {t("about.aboutMe")}
          </p>
        </Box>
        <Box className="mt-5">
          <Title className="text-4xl text-center">{t("about.education")}</Title>

          {educations.map((education, index) => (
            <Education
              institution={education.institution}
              yearOfGraduation={education.yearOfGraduation}
              educationLevel={education.educationLevel}
              specialization={education.specialization}
              className={"mt-5"}
              key={index}
            />
          ))}
        </Box>
      </Container>
    </>
  );
};
