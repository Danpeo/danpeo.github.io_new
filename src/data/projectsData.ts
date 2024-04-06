import { CardProps } from "../components/primitives/Card.tsx";
import { useTranslation } from "react-i18next";

export class ProjectsData {
  static getProjectCards() {
    const [t, _] = useTranslation();

    const projectCards: CardProps[] = [
      {
        imageSource: "img/Screenshot_5.png",
        title: "DVar Kanji",
        text: t("projects.dvarKanjiText"),
        buttons: [
          { text: "Button 1", navigation: "/route1" },
          { text: "Button 2", navigation: "/route2" },
        ],
      },
      {
        imageSource: "img/Screenshot_5.png",
        title: "DVar Kanji",
        text: t("projects.dvarKanjiText"),
        buttons: [
          { text: "Button 1", navigation: "/route1" },
          { text: "Button 2", navigation: "/route2" },
        ],
      },
      {
        imageSource: "img/Screenshot_5.png",
        title: "DVar Kanji",
        text: t("projects.dvarKanjiText"),
        buttons: [
          { text: "Button 1", navigation: "/route1" },
          { text: "Button 2", navigation: "/route2" },
        ],
      },
      {
        imageSource: "img/Screenshot_5.png",
        title: "DVar Kanji",
        text: t("projects.dvarKanjiText"),
        buttons: [
          { text: "Button 1", navigation: "/route1" },
          { text: "Button 2", navigation: "/route2" },
        ],
      },
      {
        imageSource: "img/Screenshot_5.png",
        title: "DVar Kanji",
        text: t("projects.dvarKanjiText"),
        buttons: [
          { text: "Button 1", navigation: "/route1" },
          { text: "Button 2", navigation: "/route2" },
        ],
      },
    ];
    return projectCards;
  }
}
