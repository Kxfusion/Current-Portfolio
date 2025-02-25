'use client'

import { Header } from "./components/basics/header";
import { Sidebar } from "./components/basics/sidebar";
import { Content } from "./components/content";
import { TabContext } from "./context/tab-context";
import type { ValidTab } from "./types/tab-state";
import { useState } from "react";

export default function Dashboard() {
  const [currentTab, setCurrentTab] = useState<ValidTab>("Todo App");
  const validTabs: ValidTab[] = [
    "Todo App",
    "Certificate Hero",
    "Airfox",
    "Word Scramble",
  ];

  return (
    <TabContext.Provider 
        value={{ currentTab, updateTab: setCurrentTab, validTabs }}
      >
        <div className="w-full flex flex-row flex-wrap">
          <Sidebar />
          <div className="w-full grow-0 md:w-[70%] xl:w-[80%] max-h-screen overflow-x-hidden overflow-y-scroll">
            <Header />
            <Content />
          </div>
        </div>
      </TabContext.Provider>
  );
}
