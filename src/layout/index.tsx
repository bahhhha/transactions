import { Sidebar } from "./sidebar/";

interface IProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: IProps): JSX.Element => {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="p-5 w-full overflow-y-scroll main">{children}</div>
    </div>
  );
};
