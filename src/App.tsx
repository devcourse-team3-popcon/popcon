import { Route, Routes, Navigate } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import BopsCommunity from "./features/community/components/BopsCommunity";
import ConcertCommunity from "./features/community/components/ConcertCommunity";
import OpenCommunity from "./features/community/components/OpenCommunity";
import Community from "./features/community/components/Community";
import AddBopPost from "./features/community/components/AddBopPost";
import AddPost from "./features/community/components/AddPost";
import ProtectedRoute from "./components/common/ProtectedRoute";
import PostDetail from "./features/community/components/PostDetail";
import Chat from "./pages/Chat";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />}>
          <Route index element={<Navigate to="post-detail" replace />} />

          <Route path="post-detail" element={<PostDetail />} />
          <Route path="bops-community" element={<BopsCommunity />} />
          <Route path="concert-community" element={<ConcertCommunity />} />
          <Route path="open-community" element={<OpenCommunity />} />

          <Route element={<ProtectedRoute />}>
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
        <Route path="/chat" element={<Chat />} />
      </Route>
    </Routes>
  );
}
