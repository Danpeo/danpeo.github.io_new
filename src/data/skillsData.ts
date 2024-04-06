import { PrimarySkillProps } from "../components/sections/PrimarySkill.tsx";

export class SkillsData {
  static getLanguages() {
    const languages: PrimarySkillProps[] = [
      {
        name: "C#",
        valuePercent: 80,
      },
      {
        name: "JavaScript/TypeScript",
        valuePercent: 60,
      },
      {
        name: "SQL",
        valuePercent: 65,
      },
      {
        name: "F#",
        valuePercent: 35,
      },
      {
        name: "HTML/CSS",
        valuePercent: 70,
      },
      {
        name: "UML",
        valuePercent: 35,
      },
      {
        name: "C++",
        valuePercent: 30,
      },
      {
        name: "Python",
        valuePercent: 45,
      },
    ];

    return languages;
  }

  static getFrameworks() {
    const frameworks: PrimarySkillProps[] = [
      {
        name: "ASP.NET Core (Web API, Razor Pages, MVC)",
        valuePercent: 80,
      },
      {
        name: "Blazor (WASM)",
        valuePercent: 75,
      },
      {
        name: "Entity Framework Core",
        valuePercent: 60,
      },
      {
        name: "React",
        valuePercent: 65,
      },
      {
        name: "Angular",
        valuePercent: 45,
      },
      {
        name: "Akka.NET",
        valuePercent: 5,
      },
      {
        name: "MediatR",
        valuePercent: 50,
      },
      {
        name: "xUnit",
        valuePercent: 50,
      },
      {
        name: "Serilog",
        valuePercent: 40,
      },
      {
        name: "Windows Forms",
        valuePercent: 45,
      },
      {
        name: "ADO.NET",
        valuePercent: 10,
      },
    ];

    return frameworks;
  }

  static getConcepts() {
    const concepts: PrimarySkillProps[] = [
      {
        name: "SOLID",
        valuePercent: 70,
      },
      {
        name: "DRY",
        valuePercent: 80,
      },
      {
        name: "DDD",
        valuePercent: 30,
      },
      {
        name: "OOP",
        valuePercent: 80,
      },
      {
        name: "FP",
        valuePercent: 40,
      },
      {
        name: "Concurrency",
        valuePercent: 45,
      },
      {
        name: "Clean Code/Architecture",
        valuePercent: 60,
      },
    ];

    return concepts;
  }

  static getTechnologies() {
    const techs: PrimarySkillProps[] = [
      {
        name: "PostgreSQL",
        valuePercent: 55,
      },
      {
        name: "Git",
        valuePercent: 65,
      },
      {
        name: "Linux",
        valuePercent: 35,
      },
    ];
    return techs;
  }
}
