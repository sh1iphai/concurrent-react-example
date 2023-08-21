import { useState, useTransition } from "react";
import { TabButton } from "./TabButton";
import { AboutTab } from "./AboutTab";
import { PostsTab } from "./PostsTab";
import { ContactTab } from "./ContactTab";
import styles from "./App.module.css";

type TabType = "about" | "posts" | "contact";

export const App = () => {
  const [_, startTransition] = useTransition();
  const [tab, setTab] = useState<TabType>("about");
  const selectTab = (nextTab: TabType) => {
    startTransition(() => {
      setTab(nextTab);
    });
  };
  return (
    <>
      <div className={styles.tabList}>
        <TabButton
          isActive={tab === "about"}
          onClick={() => selectTab("about")}
        >
          About
        </TabButton>
        <TabButton
          isActive={tab === "posts"}
          onClick={() => selectTab("posts")}
        >
          Posts (slow)
        </TabButton>
        <TabButton
          isActive={tab === "contact"}
          onClick={() => selectTab("contact")}
        >
          Contact
        </TabButton>
      </div>
      <hr />
      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
    </>
  );
};
