import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./pages/Home/Home";
import ProjectGrid from "./pages/Projects/ProjectGrid";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <ProjectGrid />
    </div>
  );
}

export default App;
