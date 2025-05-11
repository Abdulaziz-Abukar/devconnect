// Root App Shell
import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { NavBar } from "./components/NavBar";
export function App() {
  return (
    <>
      <NavBar />
      <AppRoutes />
    </>
  );
}
