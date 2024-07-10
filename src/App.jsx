import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-zinc-900">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
