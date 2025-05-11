// Routing Setup
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { CreatePost } from "../pages/CreatePost";
import { Feed } from "../pages/Feed";
import { Profile } from "../pages/Profile";
import { NotFound } from "../pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      {/* Main page routes */}
      <Route path="/" element={<Home />} />
      <Route path="feed" element={<Feed />} />
      <Route path="createpost" element={<CreatePost />} />
      <Route path="profile" element={<Profile />} />
      {/* Route any invalid ends to NotFound */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
