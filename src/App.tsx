import { Route, Routes, Navigate } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import BopsCommunity from "./features/community/components/BopsCommunity";
import ConcertCommunity from "./features/community/components/ConcertCommunity";
import OpenCommunity from "./features/community/components/OpenCommunity";
import CommunityNavigation from "./features/community/components/CommunityNavigation";
import AddBopPost from "./features/community/components/AddBopPost";
import AddPost from "./features/community/components/AddPost";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<CommunityNavigation />}>
          <Route index element={<Navigate to="bops-community" replace />} />

          <Route path="bops-community" element={<BopsCommunity />} />
          <Route path="concert-community" element={<ConcertCommunity />} />
          <Route path="open-community" element={<OpenCommunity />} />

          <Route path="bops-community/add" element={<AddBopPost />} />
          <Route
            path="concert-community/add"
            element={<AddPost channelName="ConcertCommunity" />}
          />
          <Route
            path="open-community/add"
            element={<AddPost channelName="OpenCommunity" />}
          />
        </Route>
      </Route>
    </Routes>
  );
}
