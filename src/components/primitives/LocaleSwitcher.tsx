import { changeLanguage } from "i18next";

interface LocaleProps {
  currentLanguage: string;
}

export const LocaleSwitcher = ({ currentLanguage }: LocaleProps) => {
  const isCurrentLanguage = (lang: string) => {
    return lang === currentLanguage;
  };
  const commonButtonStyle: string = "text-white font-bold py-2 px-4 rounded mx-1";
  const activeButtonStyle: string = "bg-blue-500 hover:bg-blue-700";
  const inactiveButtonStyle: string = "bg-gray-500 hover:bg-gray-700";
  return (
    <>
      <div className="inline">
        <button
          className={` ${commonButtonStyle} ${
            isCurrentLanguage("en")
              ? `${activeButtonStyle}`
              : `${inactiveButtonStyle}`
          }`}
          onClick={() => changeLanguage("en")}
        >
          English
        </button>
        <button
          className={` ${commonButtonStyle} ${
            isCurrentLanguage("ru")
              ? `${activeButtonStyle}`
              : `${inactiveButtonStyle}`
          }`}
          onClick={() => changeLanguage("ru")}
        >
          Русский
        </button>
      </div>
    </>
  );
};
