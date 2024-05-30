import { lazy } from "react";

const HomePage = lazy(() => import("../../views/home"));

const Home = () => {
  return (
    <div className="w-full h-full">
      <HomePage />
    </div>
  );
};

export default Home;
