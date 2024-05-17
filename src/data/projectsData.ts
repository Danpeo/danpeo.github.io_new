import { CardProps } from "../components/primitives/Card.tsx";
import { useTranslation } from "react-i18next";

export class ProjectsData {
  static getProjectCards() {
    const [t, _] = useTranslation();

    const projectCards: CardProps[] = [
      {
        imageSource: "img/dvarkanji.png",
        title: "DVar Kanji",
        text: t("projects.dvarKanjiText"),
        buttons: [
          {
            text: "Github Code",
            navigation: "https://github.com/Danpeo/DanilvarKanji",
          },
        ],
      },
      {
        imageSource: "img/nihongoquest.jpeg",
        title: "NIHONGO КВЕСТ",
        text: t("projects.nihongoQuest"),
        buttons: [
          {
            text: "Yandex Games",
            navigation:
              "https://yandex.ru/games/developer?name=Varov%27s%20Games#app=236654",
          },
        ],
      },
      {
        imageSource: "img/Screenshot_5.png",
        title: "DVarScript",
        text: t("projects.dvarScript"),
        buttons: [
          {
            text: "Gihub Code",
            navigation: "https://github.com/Danpeo/DVarScript",
          },
        ],
      },
      {
        imageSource: "img/dvar-flash.png",
        title: "DVar Flash",
        text: t("projects.dvarFlash"),
        buttons: [
          {
            text: "GO",
            navigation: "https://danpeo.github.io/dvar-dictionary/",
          },
        ],
      },
      {
        imageSource: "img/dict.png",
        title: "English Dictionary",
        text: "English Dictionary",
        buttons: [
          {
            text: "GO",
            navigation: "https://danpeo.github.io/dvar-dictionary/",
          },
        ],
      },
      {
        imageSource: "img/textExtractor.png",
        title: "Text Extractor",
        text: t("projects.textExtractor"),
        buttons: [
          {
            text: "Github Code",
            navigation: "https://github.com/Danpeo/DVar.TextExtractor",
          },
        ],
      },
    ];
    return projectCards;
  }
}
