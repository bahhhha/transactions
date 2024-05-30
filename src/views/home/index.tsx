import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const HomePage = () => {
  const { t } = useTranslation("home");
  return (
    <div className="w-full h-full flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-2/5 w-4/5 flex flex-col gap-4"
      >
        <h1 className="text-4xl font-bold text-blue-900">{t("welcome")}</h1>
        <p>{t("info")}</p>
      </motion.div>
    </div>
  );
};

export default HomePage;
