import {EducationProps} from "../components/sections/Education.tsx";
import {useTranslation} from "react-i18next";

export class EducationData {
    static getEducationInfo() {
        const [t, _] = useTranslation();
        
        const educations: EducationProps[] = [
            {
                institution: t("educations.istu"),
                yearOfGraduation: 2024,
                educationLevel: t("educations.bachelor"),
                specialization: t("educations.computerScienceSpecialization")
            }
        ];
        
        return educations;
    }
}