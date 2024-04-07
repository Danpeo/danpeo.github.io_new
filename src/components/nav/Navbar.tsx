import { LocaleSwitcher } from "../primitives/LocaleSwitcher.tsx";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

interface Link {
  title: string;
  url: string;
}

interface NavbarProps {
  title?: string;
  titleNav?: string;
  links: Link[];
}

export default function Navbar({
  links,
  title = "Title",
  titleNav = "/",
}: NavbarProps) {
  const [_, i18n] = useTranslation();
  const commonLinkStyles =
    "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0";
  return (
    <>
      <nav className="sticky top-0 shadow-md z-10 border-gray-200 bg-gray-950">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href={titleNav}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              {title}
            </span>
          </a>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
              className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8
             rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-900 md:bg-gray-950 border-gray-800"
            >
              {links.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.url}
                    className={({ isActive }) =>
                      isActive
                        ? `text-white md:text-blue-500 ${commonLinkStyles}`
                        : `md:text-white text-white ${commonLinkStyles}`
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
              <li>
                <LocaleSwitcher currentLanguage={i18n.language} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
