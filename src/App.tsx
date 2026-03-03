import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import List from "./pages/List";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/games" element={<List />} />
        <Route path="/events" element={<Events />} />
        <Route path="/games/:slug" element={<GamePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
