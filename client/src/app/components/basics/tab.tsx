import { TabContext } from "@/app/context/tab-context";
import { ValidTab } from "@/app/types/tab-state";
import { useContext } from "react";

type TabProps = { name: ValidTab }

export const Tab = ({ name }: TabProps) => {
    const { currentTab, updateTab } = useContext(TabContext);

    const tabColor = currentTab === name ? "bg-gray-700" : "bg-gray-800";

    return (
        <div 
            onClick={() => { updateTab(name) }}
            className={`cursor-pointer grow text-center text-lg/10 h-10 md:text-lg/20 md:h-20 text-gray-300 md:grow-0 ${tabColor}`}
        >
            {name}
        </div>
    );
}
