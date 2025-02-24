export type ValidTab = "Certificate Hero" | "Airfox" | "Todo App" | "Word Scramble";

export type TabState = {
    validTabs: ValidTab[],
    currentTab: ValidTab,
    updateTab: (newTab: ValidTab) => void,
};
