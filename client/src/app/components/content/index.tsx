import { TabContext } from "@/app/context/tab-context";
import { useContext } from "react";
import { CertificateHero } from "./certificate-hero";
import { TodoApp } from "./todo-app";
import { Airfox } from "./airfox";
import { WordPuzzle } from "./word-puzzle";

export const Content = () => {
    const { currentTab } = useContext(TabContext);

    if (currentTab === "Certificate Hero") {
        return <CertificateHero />;
    }

    if (currentTab === "Todo App") {
        return <TodoApp />;
    }

    if (currentTab === "Airfox") {
        return <Airfox />;
    }

    if (currentTab === "Word Scramble") {
        return <WordPuzzle />;
    }

    return null;

}
