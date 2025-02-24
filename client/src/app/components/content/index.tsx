import { TabContext } from "@/app/context/tab-context";
import { useContext } from "react";
import { CertificateHero } from "./certificate-hero";

export const Content = () => {
    const { currentTab } = useContext(TabContext);

    if (currentTab === 'Certificate Hero') {
        return <CertificateHero />;
    } else {
        null;
    }

}
