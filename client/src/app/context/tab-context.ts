'use client'

import { createContext } from "react";
import type { TabState } from "../types/tab-state";

export const TabContext = createContext<TabState>({ currentTab: "Todo App", validTabs: [], updateTab: () => {}});
