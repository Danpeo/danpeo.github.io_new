import { useTranslation } from "react-i18next";

export const Greeting = () => {
  const translation = useTranslation();

  return (
    <>
      <div className="mt-16">
        <strong>
          <h1 className="text-5xl font-bold text-white text-center">
            {translation.t("home.greeting")}{" "}
            <b className="text-blue-700">{translation.t("general.myName")}</b>
          </h1>
        </strong>
      </div>
    </>
  );
};
