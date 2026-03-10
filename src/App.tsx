import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import List from "./pages/games/List";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";
import GamePage from "./pages/games/GamePage";
import AboutMember from "./pages/AboutMember";
import Developers from "./pages/developers/Developers";
import DeveloperPage from "./pages/developers/DeveloperPage";
import Showreel from "./pages/Showreel";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:user" element={<AboutMember />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/games" element={<List />} />
        <Route path="/events" element={<Events />} />
        <Route path="/games/:slug" element={<GamePage />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/developers/:slug" element={<DeveloperPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/showreel" element={<Showreel />} />
    </Routes>
  );
}

export default App;
