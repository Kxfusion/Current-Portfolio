import { TabContext } from "@/app/context/tab-context";
import { useContext } from "react";

export const Header = () => {
    const { currentTab } = useContext(TabContext);

    const titles = {
        "Certificate Hero": "My Time At Certificate Hero",
        "Airfox": "My Time At Airfox",
        "Todo App": "A Small Next App For Task Tracking",
        "Word Scramble": "Work In Progress Word Puzzle",
    };

    return (
        <div className="fixed w-[80%] text-center text-gray-300 text-xl/20 h-20 bg-gray-950">{ titles[currentTab] }</div>
    );
};
