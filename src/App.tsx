import {Route, Routes} from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import UpcomingConcerts from "./features/upcoming_concerts/UpcomingConcerts";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/upcoming-concerts' element={<UpcomingConcerts />} />
      </Route>
    </Routes>
  );
}
