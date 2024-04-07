import { Container } from "../components/primitives/Container.tsx";
import { Title } from "../components/primitives/Title.tsx";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const [t, _] = useTranslation();

  return (
    <>
      <Container>
        <Title className={"text-6xl mb-10"}>{t("routes.contact")}</Title>

        <dl className="max-w-md divide-y text-white divide-gray-700">
          <div className="flex flex-col pb-3">
            <dt className="mb-1 md:text-lg text-gray-400">
              Email
            </dt>
            <dd className="text-lg font-semibold">danilvar4@gmail.com</dd>
          </div>

          <div className="flex flex-col pt-3">
            <dt className="mb-1 md:text-lg text-gray-400">
              {t("contact.phoneNumber")}
            </dt>
            <dd className="text-lg font-semibold">+79043116527</dd>
          </div>
          <div className="flex flex-col pt-3">
            <dt className="mb-1 md:text-lg text-gray-400">
              Telegram
            </dt>
            <dd className="text-lg font-semibold">
              <a href={"https://t.me/danilvar"} className="hover:underline">https://t.me/danilvar</a>
            </dd>
          </div>
          <div className="flex flex-col pt-3">
            <dt className="mb-1 md:text-lg text-gray-400">
              Github
            </dt>
            <dd className="text-lg font-semibold">
              <a href={"https://github.com/Danpeo"} className="hover:underline">https://github.com/Danpeo</a>
            </dd>
          </div>
        </dl>
      </Container>
    </>
  );
};
