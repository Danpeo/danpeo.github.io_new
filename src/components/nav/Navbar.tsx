import {LocaleSwitcher} from "../primitives/LocaleSwitcher.tsx";
import {useTranslation} from "react-i18next";

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
    const translation = useTranslation();
    
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-950">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a
                        href={titleNav}
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {title}
            </span>
                    </a>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8
             rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-gray-950 dark:border-gray-800">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.url}
                                        className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-800 md:p-0 dark:text-white md:dark:text-blue-500"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <LocaleSwitcher currentLanguage={translation.i18n.language}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
