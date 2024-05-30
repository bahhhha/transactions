import { Link } from "react-router-dom";
import { Tab } from "../../model";
import { setActiveTab, $activeTab } from "../../model";
import { useUnit } from "effector-react";
import { useMediaQuery } from "@mantine/hooks";

export interface IProps {
  icon: JSX.Element;
  title: string;
  path: string;
  tab: Tab;
}

export const SidebarItem = ({ icon, path, title, tab }: IProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [setActive, activeTab] = useUnit([setActiveTab, $activeTab]);
  const isActive = activeTab === tab;

  return (
    <Link
      onClick={() => setActive(tab)}
      to={path}
      className={`w-full z-50 cursor-pointer hover:text-gray-500 duration-150 text-gray-900 flex gap-4 items-center justify-center ${
        isActive ? "text-gray-600" : "text-gray-900"
      } ${isDesktop ? "h-16" : "h-12"}`}
    >
      <div className="flex items-center gap-2 w-full justify-start">
        {icon}
        {isDesktop && <p>{title}</p>}
      </div>
    </Link>
  );
};
