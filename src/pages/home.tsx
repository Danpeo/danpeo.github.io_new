import Navbar from "../components/nav/Navbar.tsx";
import {Greeting} from "../components/sections/Greeting.tsx";
import {useTranslation} from "react-i18next";

export default function Home() {
    const links = [
        {title: 'Overview', url: '/'},
        {title: 'About', url: '#'},
        {title: 'Services', url: '#'},
        {title: 'Pricing', url: '#'},
        {title: 'Contact', url: '#'},
    ];
    const translation = useTranslation();
    return (
        <>
            <Navbar title={translation.t("general.myName")} links={links}/>
            <Greeting/>
            <h1>Home PAGE!!!!!!!!!</h1>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </>
    );
}