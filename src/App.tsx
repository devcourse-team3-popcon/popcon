import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/home/home";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
