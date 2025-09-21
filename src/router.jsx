import { Routes, Route } from "react-router-dom";
import World from "./components/World";
import Business from "./components/Business";
import Technology from "./components/Technology";
import Sports from "./components/Sports";
import NewsContent from "./components/NewsContent";
import Layout from "./components/Layout";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<NewsContent />} /> {/* / */}
        <Route path="Home" element={<NewsContent />} />
        <Route path="World" element={<World />} />
        <Route path="Business" element={<Business />} />
        <Route path="Technology" element={<Technology />} />
        <Route path="Sports" element={<Sports />} />
      </Route>
    </Routes>
  );
}
