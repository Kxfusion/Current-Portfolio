import { TabContext } from "@/app/context/tab-context";
import { useContext } from "react";
import { Tab } from "./tab";

export const Sidebar = () => {
    const { validTabs } = useContext(TabContext);

    return (
        <nav className="sticky w-full grow-0 h-10 bg-gray-800 flex flex-row md:w-[30%] md:h-screen md:flex-col xl:w-[20%]">
            {validTabs.map(name => <Tab key={name} name={name} />)}
        </nav>
    );
};