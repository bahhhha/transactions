import { Layout } from "./layout";
import { Transactions } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { Suspense } from "react";
import Home from "./pages/home";
import Analytics from "./pages/analytics";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <MantineProvider>
      <ToastContainer />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path="/transactions"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Transactions />
                </Suspense>
              }
            />
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/analytics"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Analytics />
                </Suspense>
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
