import { SidebarItem } from "./components/sidebar-item";
import { useTranslation } from "react-i18next";
import { AreaChart, Home, BookMarked } from "lucide-react";
import { SidebarHeader } from "./components/sidebar-header";
import { Tab } from "../model";
import { Select } from "@mantine/core";
import i18n from "../../../shared/i18n";
import { useMediaQuery } from "@mantine/hooks";

export const Sidebar = () => {
  const { t } = useTranslation("common");
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const sidebarItems = [
    {
      title: t("sidebar.home"),
      icon: <Home />,
      path: "/",
      tab: Tab.HOME,
    },
    {
      title: t("sidebar.transactions"),
      icon: <BookMarked />,
      path: "/transactions",
      tab: Tab.TRANSACTIONS,
    },
    {
      title: t("sidebar.analytics"),
      icon: <AreaChart />,
      path: "/analytics",
      tab: Tab.ANALYTICS,
    },
  ];

  return (
    <div
      className={`w-64 z-50 ${
        isDesktop
          ? "h-screen flex flex-col border shadow-lg"
          : "fixed bottom-0 w-full border-t shadow-lg"
      }`}
    >
      {isDesktop && <SidebarHeader />}
      <div
        className={`w-full flex ${
          isDesktop
            ? "flex-col md:mt-16 ml-4 p-4"
            : "flex-row justify-around p-2"
        }`}
      >
        {sidebarItems.map((item, index) => (
          <SidebarItem
            tab={item.tab}
            key={index}
            title={item.title}
            icon={item.icon}
            path={item.path}
          />
        ))}
      </div>
      <Select
        className="absolute md:bottom-4 bottom-12 p-4"
        value={i18n.language}
        data={[
          {
            value: "en",
            label: "English",
          },
          {
            value: "ru",
            label: "Русский",
          },
          {
            value: "kk",
            label: "Қазақша",
          },
        ]}
        onChange={(value) => i18n.changeLanguage(value as string)}
      />
    </div>
  );
};
